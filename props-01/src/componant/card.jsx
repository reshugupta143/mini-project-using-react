import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
    
            <div className="top">
             <img src={props.brandLogo} alt="" />
             <button>save<Bookmark /></button>
            </div>
        
           <div className="center">
            <h3>{props.companyName}<span>{props.dateHosted}</span></h3>
            <h2>{props.post}</h2>
            <div className="tags">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
           </div>
          <div className="line"></div>
           <div className="bottom">
            
            <div className="left">
              <h3>${props.payPerHour}/hr</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
           </div>
          </div>
  )
}

export default Card