import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Markers = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.map = {
      center: {
        lat: -41.1940,
        lng: 174.872
      },
      zoom: 11
    }
  }


  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvfWB1UvnfnIYv85YHcVaA7cvE4jwtzJk' }}
          defaultCenter={this.map.center}
          defaultZoom={this.map.zoom}
        >
          {this.props.rainLast6Hours.length && this.props.rainLast6Hours.map(marker => (<Markers
            lat={marker.lat}
            lng={marker.long}
            text="X"
          />))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;