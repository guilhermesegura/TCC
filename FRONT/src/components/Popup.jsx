import React from 'react'

import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
            <button className='close-btn' onClick={()=>{props.setTrigger(false)}}>Fechar</button>
        </div>
    </div>
  ) : "";
}

export default Popup