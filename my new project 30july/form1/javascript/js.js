function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      document.getElementById('nameerror').innerHTML = "Please enter name";
      return false;  
    }
    
    else if(name.length<6){  
        document.getElementById('nameerror').innerHTML = "Please enter minimum 6 character name";
      return false;  
      }  

      else if(password==null || password==""){
      document.getElementById('pweerror').innerHTML = "Please enter password";
      return false;
      }

      else if(password==null || password==""){
        document.getElementById('pweerror').innerHTML = "Please enter minimum 6 character password"
        return false;
        }

        else {
            alert("You successfully signin");
            return true;
      
        }

    }  