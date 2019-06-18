import React from 'react'
import { Portal} from 'react-portal'
import 'bootstrap/dist/css/bootstrap.css'

export  default function ModalDialog({ reward='', onClose=()=>{}}) {
  
    const  rewards = {
        reward1: ['Dialog One.', 'Dialog one is popuped, dialog two will be popuped if you close it.'],
        reward2: ['Dialog Two.', 'Dialog two is popuped, dialog three will be popuped if you close it.'],
        reward3: ['Dialog Three.','Dialog three is popuped, it is the last one. Thank you!'],
    }
    if(rewards[reward] ){
        return (
            <Portal>
                <div className="modal" style={{display:'block'}}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3  className="text-center font-weight-bold" style={{width:'400px', color:'#007bff'}}>{rewards[reward][0]}</h3>
                                    <button type="button" className="close" onClick={onClose} >
                                        <span  aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-text">
                                        <p  className="last-two-congrats text-center font-weight-bold">{rewards[reward][1]}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
            </Portal> 
        )
    }else{
        return (<div></div>)
    }
}