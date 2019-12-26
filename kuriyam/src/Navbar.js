import React from 'react';
import kuriyam from './kuriyam.png'

import {browserHistory } from 'react-router';

class Navbar extends React.Component{

    navigate(){
        browserHistory.push("Projectlist")
    }

    render(){
        return(
            
            <div className="container-fluid ">
                <nav className = "navbar navbar-default" role = "navigation">
            <div className = "navbar-header">
                <a href="https://kuriyam.io/"><img className="ml-5 logo" src={kuriyam} width="90px" height="100px"/></a>
            </div>           
            <div>
               <p className = "navbar-text navbar-right">
                   
             
               <a href="/Projectlist" className="navbar-link mr-5 font" >     HOME  </a>
                <a href="#det" className="navbar-link mr-5 font" >     PROJECTLIST  </a>
                <a href="#track" className="navbar-link mr-5 font" >     TIME TRACKING  </a>
                   <a href = "#" className = "navbar-link font">LOGOUT</a>
                 
               </p>
            </div>
         </nav> 

            </div>
            
        )
    }
};
export default Navbar;