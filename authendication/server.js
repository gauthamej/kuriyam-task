const express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"login"
    
  });
  
  con.connect((err)=> {
      if (err){console.log("Error: Database not connected"); } 
      else{console.log("Database connected!");} 
     }  );




    app.post('/post',function(req,res){
        var name =req.body.name;
        var mail =req.body.mail;
        var pass =req.body.pass;
      
       var sql= "INSERT INTO logindetails(name,email,password) VALUES(?,?,?)";
       var inss= [name,mail,pass];
       sql=mysql.format(sql,inss);
       con.query(sql,(err,result,fields)=>{
           if(!err) {
               res.json(result);
              console.log("successfully registered");
           }
           else{
               console.log("error: already registered");
           }
        })
       
       });

       app.get('/val/:id/:pas',function(req,res){
        var id =req.params.id;
        var pas =req.params.pas;
        var sql= "SELECT email FROM logindetails WHERE password= ? AND email= ? ";
        var ins=[pas,id];
        sql=mysql.format(sql,ins);
            con.query(sql,(err,result,fields)=>{
                if(result.length!=0) {
                    res.json(result);
                   console.log("success");
                }
                else{
                    console.log("Please register");
                }
             })
       });

       

       app.listen(3000,()=>console.log("listening port 3000"));
	   