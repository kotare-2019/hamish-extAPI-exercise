import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const googleMapKey =require('../../server/googleMapKey')

const Markers = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.map = {
      center: {
        lat: -41.0313583,
        lng: 175.5004293
      },
      zoom: 9
    }
  }


  render() {
    console.log('key',googleMapKey.key)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvfWB1UvnfnIYv85YHcVaA7cvE4jwtzJk' }}
          defaultCenter={this.map.center}
          defaultZoom={this.map.zoom}
        >
          {this.props.rainLast6Hours.length && this.props.rainLast6Hours
          .map((marker,i) => (<Markers key={i}
            lat={marker.lat}
            lng={marker.long}
            text="RAIN"
          />))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;