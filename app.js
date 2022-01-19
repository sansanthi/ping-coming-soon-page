const email = document.getElementById('email');
const notifyBtn = document.querySelector('.notify-btn');
const emailRegExpress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
notifyBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(email.value === '' || !emailRegExpress.test(email.value)){
        email.style.color = 'hsl(354, 100%, 66%)';
        showErrorMsg(email, "Please provide a valid email address");
    }
});

function showErrorMsg(inputValue, msg){
    const inputControl = inputValue.parentElement;
    inputControl.classList.add('error');
    const errroMessage = inputControl.querySelector('.error-message');
    errroMessage.innerHTML = msg;
}
