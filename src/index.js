import {useState} from 'react'

export function initLockedState() {
  let values = new Array()
  let index = 0
  
  function useLockedState(initial){

    const [state, setState] = useState(initial)

    if(!values.includes(state)){
      values.push(state)
    }

    function next(){
      let len = values.length
      if(index < len){
        index = index + 1
        setState(values[index])
      }
    }

    function dispatch(value) {
      if(!values.includes(value)){
        values.push(value)
      }
    }

    return [state, dispatch, next]
  }

  return useLockedState
}

export default initLockedState()

