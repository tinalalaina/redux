import React from 'react'
import IMG2 from '../../Photo/table2.png'
import Body3 from './Body3'
import './Body2.css'
function Body2() {
  return (
    <div className=' '>
      <div className='body2'>
      
       <div className="row">
       <div class="card w3-halfi">
          <img src={IMG2} alt="Concrete meets bricks" />
        </div>
        <div class="card w3-halfi">
          <img src={IMG2} alt="Concrete meets bricks" />
        </div>
        <div class="card w3-halfi">
          <img src={IMG2} alt="Concrete meets bricks" />
        </div>
        
        <div class="card w3-halfi">
          <img src={IMG2} alt="Concrete meets bricks" />
        </div>
        <div class="card w3-halfi">
          <img src={IMG2} alt="Concrete meets bricks" />
        </div>
       </div>
        
      </div>

      
      <Body3 />
        hle
    </div>
  )
}

export default Body2