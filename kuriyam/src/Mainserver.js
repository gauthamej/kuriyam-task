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
    database:"gau"
    
  });
  
  con.connect((err)=> {
      if (err){console.log("Error: Database not connected"); } 
      else{console.log("Database connected!");} 
     }  );




    app.post('/post',function(req,res){
        var name =req.body.name;
        var projectname =req.body.proname;
        var number =req.body.number;
        var email =req.body.email;
        var hourrate =req.body.hourrate;
        var spenttime=req.body.spenttime;
       var sql= "INSERT INTO free(name,projectname,number,email,hourrate,spenttime) VALUES(?,?,?,?,?,?)";
       var inss= [name,projectname,number,email,hourrate,spenttime];
       console.log(inss)
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

       app.get('/get',function(req,res){
        var sql="select * from free ";
        con.query(sql,(err,result,field)=>{
            if(!err){
                res.json(result);
                console.log("success")
            }
            else{
                console.log("error")
            }
        })
       })


       app.delete('/delete',function(req,res){
        var delid =req.body.id;
        console.log(req.body)
        var sql= "DELETE FROM free WHERE id="+delid+"";
         con.query(sql,(err,result,fields)=>{
             
             if(!err) {
                 res.json(result);
                console.log("success");
             }
             else{
                 console.log("error");
             }
          })
    });
    

    app.put('/edit',function(req,res){
		var id =req.body.editid;
        var edname =req.body.name;
        var edprojectname =req.body.projectname;
        var ednumber =req.body.number;
        var edemail =req.body.email;
        var edhourrate =req.body.hourrate;

        console.log(req.body)
        
var sql=  "UPDATE free SET name='"+edname+"', projectname='"+edprojectname+"', number='"+ednumber+"', email='"+edemail+"',hourrate='"+edhourrate+"' WHERE id = '"+id+"'";
            con.query(sql,(err,result,fields)=>{
                
				
                if(!err) {
                    res.json(result);
                   console.log("success");
                   console.log(result)
                }
                else{
                    console.log("error");
                }
             })
       });
       
       

       app.post('/spent',function(req,res){
        var spentid =req.body.spentid;
        var spentprojectname =req.body.spentprojectname;
        var spenthourrate =req.body.spenthourrate;
        var spenttime =req.body.spenttime;
      
       var sql= "INSERT INTO time(id,projectname,hourrate,spenttime) VALUES(?,?,?,?,?)";
       var insert= [spentid,spentprojectname,spenthourrate,spenttime];
       console.log(insert)
       sql=mysql.format(sql,insert);
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

       

       app.listen(4000,()=>console.log("listening port 4000"));