import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Markers = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    console.log(props)

  }
  static defaultProps = {
    center: {
      lat: -41.1940,
      lng: 174.872
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvfWB1UvnfnIYv85YHcVaA7cvE4jwtzJk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {console.log(this.props.rainLast6hour)}
          <Markers
            lat={-41.05836161881642}
            lng={175.18632704842693}
            text="X"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;