// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  getEvenOdd = () => {
    const {count} = this.state

    return count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
  }

  render() {
    const {count} = this.state
    const evenOdd = this.getEvenOdd()

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">Count {count}</h1>
          <div className="content-container">
            <p className="paragraph">{evenOdd}</p>
            <button
              className="incrementBtn"
              onClick={this.onIncrement}
              type="button"
            >
              Increment
            </button>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
