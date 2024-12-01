import React from "react";
import './DashHead.css'

import AnalyticImage from '../../assets/garmentImg/Increase.png'
const DashHead=({heading, user})=>{
    return(
<div className="DashboardHead">
        <header>
          <h2>{heading}</h2>
        </header>

       {user ==='admin'?
        <div className="user-count-card-cont">

        <div className="user-count-card">
          <h3>24</h3>
          <p>User count</p>
        </div>
        <img src={AnalyticImage} alt='' /> 
        </div>
        :''
        }

        </div>

     )


}

export default DashHead