import { useEffect } from 'react'

function useDoucmentTitle(count) {
  useEffect(()=> {
    document.title = `Count ${count}`
  },[count])
}

export default useDoucmentTitle