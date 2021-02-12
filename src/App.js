import React, { Component } from "react"
import "./App.css"
import Counter from "./components/Counter"
import CounterFour from "./components/CounterFour"
import CounterThree from "./components/CounterThree"
import CounterTwo from "./components/CounterTwo"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <CounterTwo />
        <CounterThree />
        <CounterFour />
      </div>
    )
  }
}

export default App
