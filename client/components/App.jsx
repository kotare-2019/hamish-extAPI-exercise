import React from 'react'
import SimpleMap from './SimpleMap'

import { getRainLast6HoursLocationsAPI } from '../apis/gwrcRainLast6Hours'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rainLast6Hours: []
    }
  }

  componentDidMount() {
    this.getRainLast6HoursLocations()
  }

  getRainLast6HoursLocations = () => {
    getRainLast6HoursLocationsAPI()
      .then(rainLast6HoursData => {

        this.setState({
          rainLast6Hours: rainLast6HoursData
        })
      })
  }

  render() {
    return (
      <>
        <h1>Where has it rained?</h1>

        <ul>
          {this.state.rainLast6Hours.map((e, i) => {
            return (
              <li key={i}>{e.name} Lat: {e.lat} Long: {e.long}</li>
            )
          })}
        </ul>
        <SimpleMap rainLast6Hours={this.state.rainLast6Hours} />
      </>
    )
  }
}

export default App
