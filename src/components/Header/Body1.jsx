import React from 'react'
import IMG from'../../Photo/deco.png'
import Designers from './Designers'
import Service from './Service'
function Body1() {
  return (
    <div class="container-fluid" id="home">
       <div className="image">
         <div className="textebody1 h1 fw-bold">
         Collection des données
      </div>
      </div>
      <Service/>
   <Designers/>
    </div>
  )
}

export default Body1