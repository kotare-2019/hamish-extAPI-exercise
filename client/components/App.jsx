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
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <h1 class="title">Where has it rained?</h1>
            <h2 class="subtitle">Greater Wellington Regional Council rain gauges active in last 6 hours.</h2>
          </div>
        </section>
      
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <table class="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Location</th>
                    <th>Rainfall (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rainLast6Hours.map((e, i) => {
                    return (
                      <tr key={i}> <td>{i+1}</td> <td>{e.name}</td> <td>{e.rainLast6Hours}</td> </tr>
                    )
                  })}
                </tbody>
                </table>
              </div>
              <div class="column">
                <SimpleMap rainLast6Hours={this.state.rainLast6Hours} />
              </div>
            </div>
          </div>
        <footer class="footer">Rain gauge data from Greater Wellington Regional Council</footer>
      </>
    )
  }
}

export default App
