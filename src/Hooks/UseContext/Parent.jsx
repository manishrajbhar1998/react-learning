import React, { useCallback } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { DataMapping } from "../../DataMapping/Provider";
import { GOLD_RATE_INC } from "../../DataMapping/Action";

const Parent = () => {

  console.log("Parent 1");
  

  const [state, dispatch] = DataMapping();

  const updatedGoldPrice = () => {
    dispatch({type:GOLD_RATE_INC})
  }

  const showData = useCallback(() => {
    return "state data"+state.gold;
  },[state.gold])

  return (
    <>
      <div>Parent {state.gold}</div>
      <button onClick={updatedGoldPrice}>Increase Gold Price</button>
      <Child1/>
      <Child2 showData={showData}/>
    </>
  );
};

export default Parent;
