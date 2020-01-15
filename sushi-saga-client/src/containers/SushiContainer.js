import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  let renderSushi = (start, end) => {
    return props.sushiData.slice(start, end).map(sushi => {
      return <Sushi id={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} deductMoney={props.deductMoney} sushiEaten={props.sushiEaten} changeSushiEaten={props.changeSushiEaten} moneyRemaining={props.moneyRemaining} addPlateCounter={props.addPlateCounter}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi(props.start, props.end)
        }
        <MoreButton changeStartEnd={props.changeStartEnd} />
      </div>
    </Fragment>
  )
}

export default SushiContainer