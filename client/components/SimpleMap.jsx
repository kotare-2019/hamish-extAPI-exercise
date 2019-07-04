import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapKey from '../../server/googleMapKey'
// const googleMapKey = require('../../server/googleMapKey').default

const Markers = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.map = {
      center: {
        lat: -41.0313583,
        lng: 175.5004293
      },
      zoom: 9,
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          defaultCenter={this.map.center}
          defaultZoom={this.map.zoom}
        >
          {this.props.rainLast6Hours.length && this.props.rainLast6Hours
            .map((marker, i) => (<Markers key={i}
              lat={marker.lat}
              lng={marker.long}
              text={i + 1}
            />))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;