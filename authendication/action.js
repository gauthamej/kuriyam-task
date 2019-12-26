function reg(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
}

function log(){
    document.getElementById("form2").style.display="none";
    document.getElementById("form1").style.display="block";
}

function feed(){
    var data={ name:document.getElementById("name").value,
               pass:document.getElementById("pass").value
            }
            
    var mail=document.getElementById("mail").value;
    
    var filter = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/ig;

    if (!filter.test(mail)) {
    alert('Please provide a valid email address');}
    else{
        data.mail=document.getElementById("mail").value;
        var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status==200){
        var a=this.responseText;
        alert("Registered Successfully");
    }
    else{console.log("error1");
    }
}
xhttp.open("POST","http://localhost:3000/post",true);
xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
xhttp.send(JSON.stringify(data));
    }
console.log(data);

}

function validate(){
    var pas = document.getElementById("pas").value;
   var id = document.getElementById("id").value;
   sessionStorage.setItem("loginID",id);
   var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status==200){
       
      alert("success");
      window.location="home.html";
    }
    else{console.log("please register");
    }
}
xhttp.open("GET","http://localhost:3000/val/"+id+"/"+pas,true);
xhttp.setRequestHeader("Content-Type","application/json;charset=UTF8");
xhttp.send();

}




function fileload(){
var fil= sessionStorage.getItem("loginID");
if(fil){
   window.location="home.html";
}
}