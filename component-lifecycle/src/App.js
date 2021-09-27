import React from 'react'
import Counter from './Counter'

import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mount :true,
      ignoreProp: 0,
      seed: 40,
      showErrorComp: false
    }

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)})


  }

  render() {
    return (
      <div style={{margin:'2rem'}}>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>

        {this.state.mount ? 
          <Counter 
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComp={this.state.showErrorComp}
          /> : 
          null}
      </div>
    )
  }
}

export default App;