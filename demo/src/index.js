import React from 'react'
import {render} from 'react-dom'

import Dialog from './dialog'
import {useAsync} from 'react-async-hook'
import {initLockedState} from '../../src'

const useLockedState = initLockedState()

function fetchReward2() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'done')
  })
}

function fetchReward3 () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'done')
  })
}

function Demo() {
  const [reward, dispatch, next] =  useLockedState('reward1')

  const asyncReward2 = useAsync(fetchReward2,[])
  if(asyncReward2.result){
    dispatch('reward2')
  }

  const asyncReward3 = useAsync(fetchReward3, [])

  if(asyncReward3.result){
    dispatch('reward3')
  }
  const onClose =() =>{
    next()
  }

  return (
    <div style={{paddingTop:'200px'}}>
      <h1 style={{textAlign:'center'}}>react-chain Demo</h1>
      
      <span></span>
      <Dialog reward={reward} onClose={onClose}/>
    </div>
  )
}

render(<Demo/>, document.querySelector('#demo'))
