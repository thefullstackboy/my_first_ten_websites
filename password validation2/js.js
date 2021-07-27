function validationsubmit(){
  var namee=document.myform.fname.value;  
  var password=document.myform.psw.value;  

  if (namee==null || namee==""){  
    alert("Name can't be blank");  
    return false;  
  }

  else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  

}



