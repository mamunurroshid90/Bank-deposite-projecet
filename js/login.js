document.getElementById('submit-button').addEventListener('click', function(){

    // get email
    const inputEmail = document.getElementById('login-email');
    const userEmail = inputEmail.value;
    
    // get password
    const inputPassword = document.getElementById('login-password');
    const userPassword = inputPassword.value;
    
    // login pages condition for go to other pages
    if(userEmail == 'nijummamun7@gmail.com' && userPassword == 'loginpage'){
        window.location.href = 'Banking.html';
    }
    else{
        alert('wrong information');
    }
})