import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscription = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      return <button>Subscribe</button>
    }

    return <button>Subscribed</button>
  }

  render() {
    return (
      <div className="outbox">
        <h1 className="theheading">Welcome</h1>
        <p className="thepara">Thank you! Happy Learning</p>
        <div>{this.subscription()}</div>
      </div>
    )
  }
}
export default Welcome
