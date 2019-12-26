import React from 'react';
import './Style.css';

class Timetracking extends React.Component{
    
    

    

    compost(){
       
        var spentdata={ spentid:document.getElementById("comment").value,
                   
                }
                console.log(spentdata)
                var xhttp= new XMLHttpRequest();
                 xhttp.onreadystatechange=function(){
                   if(this.readyState == 4 && this.status==200){
                     
                        alert("Registered Successfully");
                          }
                         else{console.log("error1");
                          }
                            }
                xhttp.open("POST","http://localhost:4000/spent",true);
                 xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
                  xhttp.send(JSON.stringify(spentdata));
        }


       

    render(){
        return(
            
            <div className="container-fluid" id="track">
                 
                 <div className="row ">   
                <div className="col-12" id="table">
                <p className="con5 text-center">Any comment about project please enter below</p><br/>
                    <form >
                        <div >
                        <input type="text "id="comment"   className="w-50 inputh" placeholder="enter your comments about project"/>
                        <button type="botton" onClick={this.compost} className="btn btn-primary btn-block  mt-4 btn2 ">POST</button>
                         </div>
                    </form>
                </div>
                
                </div>

                
            </div>
            
        )
    }
};
export default Timetracking;