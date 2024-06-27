function Booking () {
    let username = document.contact.username.value;
     let userStatus = phoneStatus = EmailStatus =  false;
     const alphaExp = /^[a-z]+$/;  
     
     let phonenumber = document.contact.phonenumber.value;
     const numExp = /^[0-9]+$/;
   
     let Email = document.contact.Email.value;
     const EmailExp  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
   
   
   
     if (username === "") {
       document.getElementById("userNote").innerHTML = "Name is Mandatory";
     } else{
         if (username.match(alphaExp)) {
           document.getElementById("userNote").innerHTML = ""
           userStatus = true;
         } else {
           document.getElementById("userNote").innerHTML = "only characters"
         }
     }
      
     if (phonenumber === "") {
       document.getElementById("phoneNote").innerHTML = "Number is Mandatory";
     } else {
       if (phonenumber.match(numExp)) {
           if (phonenumber.length === 10) {
               document.getElementById("phoneNote").innerHTML = ""
               phoneStatus = true;
           }
           else {
               document.getElementById("phoneNote").innerHTML = "10 Digit Number";
           }
       } else {
           document.getElementById("phoneNote").innerHTML = "only Digits";
       }
     }
       if (Email === "") {
           document.getElementById("EmailNote").innerHTML = "Email is Mandatory"; 
       } else {
            if (Email.match(EmailExp)) {
               document.getElementById("EmailNote").innerHTML = ""
               EmailStatus = true;  
            } else {
               document.getElementById("EmailNote").innerHTML = "Invalid Email";
            }
       }
         
   
   
   
   
     if (userStatus === true && phoneStatus === true && EmailStatus === true ) {
       return true;
     } else  {
       return false;
     }
   
   }