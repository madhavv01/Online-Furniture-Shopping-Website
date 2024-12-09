function validationform(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailPAttern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    var passwordPAttern = /^.{8,}$/;

    var isvalid = true;

    if (!emailPAttern.test(email)) {
        document.getElementById('emailerr').innerHTML= 'INVALID EMAIL';
        isvalid = false;
    }else{
        document.getElementById('emailerr').innerHTML='';
    }

    if (!passwordPAttern.test(password)) {
        document.getElementById('passworderr').innerHTML= 'INVALID passwoprd';
        isvalid = false;
    }else{
        document.getElementById('passworderr').innerHTML='';
    }
 
    if (isvalid) {
        sessionStorage.setItem('email',email);
        window.location.href='index.html';
    }
}