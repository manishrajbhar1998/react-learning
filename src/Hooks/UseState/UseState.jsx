import React, { useEffect, useState } from 'react'
import { flushSync } from 'react-dom';

const UseState = () => {

    const [counter, setCounter] = useState(0);


    // const increment = () => {
    //     flushSync(() => {
    //         setCounter(prev => ++prev);
    //         setCounter(prev => ++prev);
    //         setCounter(prev => ++prev);
    //         setCounter(prev => ++prev);
    //     })

    //     flushSync(() => {
    //         setCounter(prev => ++prev);
    //     })

    //     flushSync(() => {
    //         setCounter(prev => ++prev);
    //     })


    // }

    const increment = () => {
        setTimeout(()=>{
            setCounter(prev  => ++prev);
        },1000)
    }

    console.log("counter :: ", counter);


    return (
        <div>
            <h1>UseState</h1>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseState