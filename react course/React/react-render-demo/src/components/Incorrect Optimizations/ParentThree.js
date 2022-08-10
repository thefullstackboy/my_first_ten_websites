import React, {useState} from 'react'
// import { MemoizedChildThree } from './ChildThree'
import {MemoizedChildFour} from './ChildFour'

function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')

    console.log('ParentThree Render')
  return (
    <>
    <button onClick={()=>setCount((c) => c + 1)}>Count - {count}</button>
    <button onClick={()=>setName('Codevolution')}>Change name</button>
     {/* <MemoizedChildThree name={name}> */}
        {/* <strong>Hello</strong> */}
        {/* Hello */}
     {/* </MemoizedChildThree> */}
     <MemoizedChildFour name={name}/>
    </>
  )
}

export default ParentThree