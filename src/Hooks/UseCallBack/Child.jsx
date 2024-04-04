import React, { memo } from 'react'

const Child = ({megicalNum}) => {
  console.log("child component");
  return (
    <div>Child {megicalNum()}</div>
  )
}

export default memo(Child);