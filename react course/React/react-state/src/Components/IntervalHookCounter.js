import React,{useState,useEffect} from 'react'

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(pretCount => pretCount  + 1)
    }
 
    useEffect(() => {      
        const interval = setInterval(tick, 1000)
        return ()=> {
            clearInterval(interval)
        }
    },[])

  return (
    <div>
        {count}
    </div>
  )
}
