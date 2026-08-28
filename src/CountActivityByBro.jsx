import {useState} from 'react';

function CountActivityByBro (){

    const [count, setCount] = useState("0");

    const decrementBtn = () => {
        setCount(count - 1 );
    }

    const incrementBtn = () => {
        setCount(count + 1);
    }

    const resetBtn = () => {
        setCount(0);
    }


    return(<>
        <div className="counter-container">
            <p>{count}</p>

            <button onClick={decrementBtn}>Decrement</button>
            <button onClick={resetBtn}>Reset</button>
            <button onClick={incrementBtn}>Increment</button>
        </div>
        
        </>)

}

export default CountActivityByBro