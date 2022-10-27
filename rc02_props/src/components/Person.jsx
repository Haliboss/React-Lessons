import React from 'react'
import Msg from './msg'

const Person = (props) => {
    
    const { name, img, tel } = props

  return (
    <div>
        <Msg name={name}/>
        <img src={img} alt="img1" />
        <p>{tel}</p>
    </div>
  )
}

export default Person