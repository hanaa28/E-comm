var namee=document.getElementById("namess")
   var errname=document.getElementById("errorname")
   var emaill=document.getElementById("email")
   var emailerr=document.getElementById("erremail")
   var pass=document.getElementById("pass")
   var errpass=document.getElementById("errpass")
   function login(e){
    e.preventDefault();
    if (namee.value.length < 3) {
        errname.style.display="block";
    }
    else
    errname.style.display="none";
    var regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!(regex.test(emaill.value))){
        emailerr.style.display="block"
    }
    else
    emailerr.style.display="none"

    if(pass.value.length<8){
        errpass.style.display="block"
    }
    else
    errpass.style.display="none"
   }