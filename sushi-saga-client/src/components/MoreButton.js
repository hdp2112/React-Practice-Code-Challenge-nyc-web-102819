import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.changeStartEnd()}>
            <div onClick={console.log('reset the state of each plate!')}>More sushi!</div>
          </button>
}

export default MoreButton