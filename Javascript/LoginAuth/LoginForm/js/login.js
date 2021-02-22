var sessionkey = sessionStorage.user
var sessionvalue = sessionStorage.pass
let buttons = document.querySelectorAll('button')
var username = document.querySelector('#username')
var password = document.querySelector('#password')
sessionStorage.user='atilla'
sessionStorage.pass='123456'

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(button.id === 'login'){
            console.log(username.value,password.value)
            if(username.value == sessionkey && password.value == sessionvalue){
                console.log('succes')
                window.location.replace("dashboard.html")
            }else{
                console.log('wrong pass')
                alert('Wrong Input! Please try again or hit register.')
            }
        }
        if(button.id === 'register'){
            console.log('I want to register')
            window.location.replace("register.html")
        }
        e.preventDefault();
    })
    
})





console.log(sessionStorage)
console.log('check',sessionkey, sessionvalue)