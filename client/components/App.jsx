import React from 'react'
// import SomeMap from './SomeMap'

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
        // console.log(Object.keys(rainLast6HoursData))

        console.log(rainLast6HoursData[0])

        this.setState({
          rainLast6Hours: rainLast6HoursData
        })
        // console.log("STATE", this.state)
      })
  }

  render() {
    return (
      <>
        <h1>Some Rain</h1>

        <ul>
          {this.state.rainLast6Hours.map((e, i) => {
            return (
              <li key={i}>{e.attributes.Name}</li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
