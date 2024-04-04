import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const UseCallBack = () => {
  const [count, setcount] = useState(0);

  const megicalNum = useCallback(() => {
    console.log("inside megicalNum");
    return "inside megicalNum"+count;
  },[]);

  return (
    <>
      <div>UseCallBack {count}</div>
      <button onClick={() => setcount((prev) => ++prev)}>Counter</button>
      <Child megicalNum={megicalNum} />
    </>
  );
};

export default UseCallBack;
