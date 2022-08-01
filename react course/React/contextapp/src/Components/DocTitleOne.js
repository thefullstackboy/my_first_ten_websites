import React, {useState, useEffect} from 'react'
import useDoucmentTitle from './useDoucmentTitle'

export default function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDoucmentTitle(count)
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}
