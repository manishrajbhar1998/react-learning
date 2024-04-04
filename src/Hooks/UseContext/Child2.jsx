import React, { memo } from "react";
import { DataMapping } from "../../DataMapping/Provider";

const Child2 = ({ showData=()=>{}}) => {
  const [state, dispatch] = DataMapping();


  console.log("Child 2");
  return (
    <>
      <div>Child2 {showData()}</div>
      <p>Demo {state.gold}</p>
    </>
  );
};

export default memo(Child2);
