import React, { memo } from 'react'
import { DataMapping } from '../../DataMapping/Provider';

const Child1 = () => {
  console.log("Child 1");
  const [state, dispatch] = DataMapping();
  return (
    <div>Child1 {state.gold}</div>
  )
}

export default memo(Child1);