import { useState } from "react";
 
function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
       setCount(prevCount => prevCount - value)
    }

    const rest = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, rest]
}

export default useCounter