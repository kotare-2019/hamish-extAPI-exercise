import React from 'react'


import { getRainLast6Hours } from '../apis/gwrcRainLast6Hours'

class App extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   rainLast6Hours: {}
    // }
  }

  // componentDidMount() {
  //   this.getRainLast6HoursData()
  // }

  // getRainLast6HoursData = () => {
  //   getRainLast6Hours(issId)
  //     .then(satellite => {
  //       this.setState({
  //         satellite: satellite
  //       })
  //     })
  // }

  render() {
    return (
      <>
        <h1>A map</h1>


      </>
    )
  }
}
export default App

export default App
