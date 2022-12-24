import React, {useState} from "react";

const Hook = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    const handleDecrease = () => {
        setCounter(counter - 1)
    }

    const handleInputValue = (event) => {
        setCounter(+event.target.value)
    }
 
    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <div >{counter}</div>
            <input type="number" onChange={(event) => handleInputValue(event)} value={counter}/>
        </div>
    )
}

export default Hook;