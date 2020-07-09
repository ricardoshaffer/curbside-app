import React, { Component } from "react";
import API from "../API";
import SearchForm from "./search-function";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './search.css';
import "../../App.css";
import CardListing from '../../components/Card';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends Component {

    state = {
        search: "",
        listings: [],
        listingSort: [],
        order: ""

    };
    componentDidMount() {
        axios.get("/api/listings").then(res => this.setState({
            listings: res.data,
            listingSort: res.data
        })).catch(err => console.log(err))
        
    }

    sortByName = () => {
        const filtereds = this.state.listingSort;
        if (this.state.order === "ascending") {
            const sortFunction = filtereds.sort((a, b) => (a.date > b.date) ? 1 : -1)
            console.log(sortFunction)

            this.setState({
                listingSort: sortFunction,
                order: "descending"
            })
        } else {

            const sortFunction = filtereds.sort((a, b) => (a.date > b.date) ? -1 : 1)

            this.setState({
                listingSort: sortFunction,
                order: "ascending"
            })

        }
    }
    render() {
        return (
            <div>
                <Container fluid className="search-bkg">
                    <div style={{ textAlign: 'center' }}>
                        <h2>  Listings   </h2>
                        <h3><SearchForm
                            listing={this.state.listings}
                            handleSearch={this.handleSearch}
                            handleInputChange={
                                this.handleInputChange
                            }
                        /></h3>
                    </div>
                    <div className="itemTable">
                        <Row>
                            <Col >

                                <Row>
                                    <thead className="">
                                        <h2
                                            className="hover-pointer heading"
                                            onClick={this.sortByName}
                                        >
                                            Sort by date</h2>
                                    </thead>
                                </Row>
                                <Row className="justify-content-md-center">

                                    {this.state.listingSort.map(
                                        (listing) => {
                                            return (
                                                <Col xs={12} md={4}>
                                                    <Row className="justify-content-md-center">
                                                        <CardListing
                                                            listingId={listing._id}
                                                            listingImage={listing.listing_image}
                                                            listingTitle={
                                                                listing.listing_title
                                                            }
                                                            listingDescription={
                                                                listing.listing_description
                                                            }
                                                            location={listing.listing_location}
                                                            modalButton={
                                                                <Button className="btn-custom" variant="custom"><a href={"/listings/" + listing._id}>View</a></Button>

                                                            }
                                                        />
                                                    </Row>

                                                </Col>
                                            )
                                        }
                                    )}
                                </Row>
                                {this.state.listings.length ? (
                                    <tbody className="">

                                    </tbody>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </Col>
                        </Row>
                    </div>


                </Container>
            </div>
        );
    }
    handleInputChange = (event) => {
        const listings = this.state.listings;
        const UserInput = event.target.value;
        const listingSort = listings.filter(
            (listing) =>
                listing.listing_title
                    .toLowerCase()
                    .indexOf(UserInput.toLowerCase()) > -1
        );
        this.setState({
            listingSort,
        });
    };
    listingSearch = () => {
        API.getListings()
            .then((res) =>
                this.setState({
                    listingSort: res.data,
                    listings: res.data,
                })
            )
            .catch((err) => console.log(err));
    };
    handleSearch = (event) => {
        event.preventDefault();
        event.persist();
        const { listings, search } = this.state;
        const userInput = event.target.value;
        console.log(event);
        const listingSort = listings.filter(
            (listing) =>
                listing.listing_title
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );

        this.setState({
            listingSort,
        });
    };
}

export default Results;