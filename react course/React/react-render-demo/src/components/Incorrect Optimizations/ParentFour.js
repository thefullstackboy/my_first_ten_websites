import React, {useCallback, useMemo, useState} from 'react'
import {MemoizedChildFive} from './ChildFive'

function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')

    // const person = {
    //   fname: 'Bruce',
    //   lname: 'Wayne'
    // }

    // const memoozedPerson = useMemo(() => person, [])

    const handleClick = () => {}
    
     const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFive Render')
  return (
    <>
    <button onClick={()=>setCount((c) => c + 1)}>Count - {count}</button>
    <button onClick={()=>setName('Codevolution')}>Change name</button>    
    {/* <MemoizedChildFive name={name} person={memoozedPerson}/> */}
     <MemoizedChildFive name={name} handleClick={memoizedHandleClick }/> 
    
    </>
  )
}

export default ParentThree