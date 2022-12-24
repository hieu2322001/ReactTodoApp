import React, {useState, useEffect} from 'react'

const EffectHook = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = `you click ${counter} times`
    })
  return (
    <div>
        <p>this is counter value: {counter}</p>
        <button onClick={() => setCounter(counter +1)} >Click me</button>
    </div>
  )
}

export default EffectHook