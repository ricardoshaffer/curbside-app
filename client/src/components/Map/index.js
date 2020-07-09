import React, { Component } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import Geocode from "react-geocode";

const googKey = 'YOUR API KEY';

Geocode.setApiKey(googKey);

const containerStyle = {
  width: '360px',
  height: '360px'
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      center: props.latlong || {
        lat: 39.2904,
        lng: -76.6122
      },
      address: ""
    };
  }
  render() {
    return (
      <>
        <LoadScript
          googleMapsApiKey={googKey}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={this.state.center}
            zoom={13}
          >
            <Circle center={this.state.center} radius={500} />
            <></>
          </GoogleMap>
        </LoadScript>
      </>
    )
  }
} 