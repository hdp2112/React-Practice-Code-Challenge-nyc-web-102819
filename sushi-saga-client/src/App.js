import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiData: [],
    moneyRemaining: 50,
    start: 0,
    end: 4,
    plateCounter: {}
  }

  changeStartEnd = () => {
    if (this.state.end < 97) {
    this.setState({
      start: this.state.start + 5,
      end: this.state.end + 5
    })
    } else if (this.state.end > 97) {
      this.setState({
        start: 96,
        end: 100
      })
    }
  }

  deductMoney = (sushiPrice) => {
    if (this.state.moneyRemaining - sushiPrice < 0) {
      return null
    } else if (this.state.moneyRemaining >= 0){
      this.setState({
        moneyRemaining: this.state.moneyRemaining - sushiPrice
      })
    }
  }

  addPlateCounter = (id) => {
    // if (this.state.plateCounter.filter(plate => plate.id === id)) {
    this.setState({
      plateCounter: [...this.state.plateCounter, {[id]: true}]
    })
    // }
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({
          sushiData: sushis
        })
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.state.sushiData} start={this.state.start} end={this.state.end} changeStartEnd={this.changeStartEnd} deductMoney={this.deductMoney} moneyRemaining={this.state.moneyRemaining} addPlateCounter={this.addPlateCounter}/>
        <Table moneyRemaining={this.state.moneyRemaining} start={this.state.start} end={this.state.end} plateCounter={Object.keys(this.state.plateCounter)}/>
      </div>
    );
  }
}

export default App;