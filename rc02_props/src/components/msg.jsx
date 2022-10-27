import React from 'react'

const Msg = ({name}) => {
  console.log(name);
  return (
    <div>
      <h1>Merhabalar {name}</h1>
    </div>
  )
}

export default Msg