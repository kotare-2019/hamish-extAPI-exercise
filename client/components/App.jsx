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
              <li key={i}>{e.attributes.Name} X Coord {e.geometry.x} Y Coord {e.geometry.y}</li>
            )
          })}
        </ul>
        <SimpleMap />
      </>
    )
  }
}

export default App
