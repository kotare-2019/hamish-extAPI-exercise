import React from 'react'
// import SomeMap from './SomeMap'

import { getRainLast6HoursLocationsAPI } from '../apis/gwrcRainLast6Hours'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rainLast6Hours: {}
    }
  }

  componentDidMount() {
    this.getRainLast6HoursLocations()
  }

  getRainLast6HoursLocations = () => {
    getRainLast6HoursLocationsAPI()
      .then(rainLast6Hours => {
        console.log(rainLast6HoursData)
        this.setState({
          rainLast6Hours: rainLast6HoursData.features
        })
      })
  }

  render() {
    return (
      <>
        <h1>Some Rain</h1>
        {this.state.rainLast6Hours}

      </>
    )
  }
}

export default App
