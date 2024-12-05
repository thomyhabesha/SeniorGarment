import React from "react";
import './ProdDashhead.css'
import AnalyticImage from '../../assets/garmentImg/Increase.png'



const ProdDashhead=({heading, user})=>{
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
        :
       user ==='productionmgr'?
       <div className="prodHead">

{/*first heading */}
        <div className="user-count-card-cont user-count-card-cont1">

        <div className="user-count-card">
          <h3>20</h3>
          <p>Total items</p>
        </div>
        <img src={AnalyticImage} alt='' /> 
        </div>


{/*second heading */}
        <div className="user-count-card-cont user-count-card-cont2">
        <div className="user-count-card">
          <h3>11</h3>
          <p>Low stock</p>
        </div>
        <img src={AnalyticImage} alt='' /> 
        </div>

{/*third heading */}
        <div className="user-count-card-cont user-count-card-cont3">

        <div className="user-count-card">
          <h3>5</h3>
          <p>Out of stock</p>
        </div>
        <img src={AnalyticImage} alt='' /> 
        </div>
        </div>
        :''
        }

        </div>

     )


}

export default ProdDashhead