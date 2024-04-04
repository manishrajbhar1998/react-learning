import React, { useMemo, useState } from "react";

const nums = new Array(30000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29000000,
  };
});

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [number,setNumber] = useState(nums);

  const isMagicalNumber = useMemo(() => number.find((item) => item.isMagical === true),
    [number]
  );
  return (
    <>
      <div>UseMemo</div>
      <p>{isMagicalNumber.index}</p>

      <button
        onClick={() => {
          setCount((prev) => ++prev);
          if(count === 10){
            setNumber(new Array(30000500).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 5500,
              };
            }))
          }
        }}

      >
        {count}
      </button>
    </>
  );
};

export default UseMemo;
