import React from 'react'
import IMG2 from '../../Photo/table2.png'
import IMG3 from '../../Photo/table.png'
import IMG1 from '../../Photo/deco.png'
import Body3 from './Body3'
import './Body2.css'
function Body2() {
  return (
    <div className=' '>
      <div className='body2'>
      
       <div className="row">
       <div class=" w3-halfi">
          <img src={IMG1} class='im'alt="Concrete meets bricks" />
        </div>
       <div class=" w3-halfi">
          <img src={IMG2}  class='im'alt="Concrete meets bricks" />
        </div>
        
       <div class="w3-halfi">
          <img src={IMG3} class='im'alt="Concrete meets bricks" />
        </div>
        
       <div class="w3-halfi">
          <img src={IMG3} class='im'alt="Concrete meets bricks" />
        </div>
       </div>
        
      </div>

      
      <Body3 />
        hle
    </div>
  )
}

export default Body2