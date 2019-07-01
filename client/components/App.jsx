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
        console.log(rainLast6HoursData)
        this.setState({
          rainLast6Hours: rainLast6HoursData
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <>
      <section class="hero is-primary">
        <div class="hero-body">
          <h1 class="title">Where has it rained?</h1>
          <h2 class="subtitle">Greater Wellington Regional Council rain gauges active in last 6 hours.</h2>
        </div>
      </section>
        <content>
          <ol type="1">
          {this.state.rainLast6Hours.map((e, i) => {
            return (
              <li key={i}> {e.name} <em>Lat: {e.lat} Long: {e.long}</em></li>
            )
          })}
          </ol>
        </content>
        <SimpleMap rainLast6Hours={this.state.rainLast6Hours} />
        <footer class="footer">Rain gauge data from Greater Wellington Regional Council</footer>
      </>
    )
  }
}

export default App
