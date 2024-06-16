import React from 'react'
import IMG from'../../Photo/deco.png'
import Body2 from './Body2'
import Designers from './Designers'
import Service from './Service'
function Body1() {
  return (
    <div class="container-fluid" id="home">
       <div className="image">
         <div className="textebody1 h1">
         Interior Design
      </div>
      </div>
      <Service/>
   <Body2/>
   <Designers/>
    </div>
  )
}

export default Body1