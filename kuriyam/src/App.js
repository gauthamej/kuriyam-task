import React from 'react';
import Navbar from './Navbar';
import Front from './Front';
import Form from './Form';
import Projectlist from "./Projectlist";
import Timetracking from "./Timetracking";

import {BrowserRouter ,Switch,Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     
    };
   
  }


  render(){
      return(
        <BrowserRouter>
      <div className="container-fluid bg">
       

         <Navbar/>
         <Front/>
          <Form/>
         <Projectlist/>
        <Timetracking/>
       
         
          
      </div>
      </BrowserRouter>

    )
  }
};


export default App;
