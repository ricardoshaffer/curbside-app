import React from "react";
import { MDBInput, MDBCol } from "mdbreact";
import "./search.css";

function SearchForm(props) {
  return (
    <div className="searchBar">
      <MDBCol md="12">
      <MDBInput  hint="Search listings..." containerClass="mt-0" 
      onChange={props.handleInputChange}
              value={props.value}
              id="listings"
              type="text"
              name="search"
              list="listing"
              className="inputBox"
              />
    </MDBCol>
    </div>
      );
    }
export default SearchForm;
