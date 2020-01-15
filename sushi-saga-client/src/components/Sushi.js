import React from 'react'

class Sushi extends React.Component {

  state = {
    sushiEaten: false
  }

  changeSushiEaten = () => {
    if (this.props.moneyRemaining - this.props.price >= 0) {
    this.setState({
      sushiEaten: true
    })
  }
  }

  render(){
    return (
      <div className="sushi" onClick={() => {
        console.log(this.props.id);
        this.props.addPlateCounter(this.props.id);
        this.changeSushiEaten();
        }}>
      <div className="plate" onClick={() => {this.props.deductMoney(this.props.price)}}>
        { this.state.sushiEaten ? null : <img src={this.props.img_url} width="100%" alt={this.props.name} />}
      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )
  }
}

export default Sushi