// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    background: 'light-mode',
  }

  onClick = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState({mode: 'Dark Mode', background: 'dark-mode'})
    } else if (mode === 'Dark Mode') {
      this.setState({mode: 'Light Mode', background: 'light-mode'})
    }
  }

  render() {
    const {mode, background} = this.state
    return (
      <div className="bg-container">
        <div className={`container ${background}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" onClick={this.onClick} type="submit">
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
