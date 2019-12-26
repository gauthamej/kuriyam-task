import React from 'react';
import './Style.css'
import Form from './Form'


class Front extends React.Component{
    render(){
        return(
            
            <div className="container-fluid ">
            
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                <p className="text-center con  ">GET START TO CREATE YOUR PROJECT.<br/><span className="total">TOTAL REVENUE </span><br/>CLICK BELOW</p>
                
                <a href="#ans" ><i className="fa fa-angle-double-down "></i></a>
                
                </div>
                <div className="col-2"></div>
             </div>
             


            </div>
           
        )
    }
};
export default Front;