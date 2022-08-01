import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
         intervalRef.current = setInterval(() => {
            setTimer(preTimer => preTimer +  1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
  return (
  <>
    <div>Hook Timer - {timer}</div>
    <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
  </>
  )
}

export default HookTimer