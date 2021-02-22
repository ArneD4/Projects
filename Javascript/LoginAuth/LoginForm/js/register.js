
var username = document.querySelector('#username')
var password = document.querySelector('#password')
let buttons = document.querySelectorAll('button')
var userCount = 0;
sessionStorage.user='atilla'
sessionStorage.pass='123456'

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(button.id === 'register'){
            userCount++;
            sessionStorage.setItem('pass',password.value)
            sessionStorage.setItem('user',username.value)
            console.log('I want to register my account')
            console.log(sessionStorage)
            alert('You have successfully been registered')
        }
        if(button.id === 'login'){
            var sessionkey = sessionStorage.user
            var sessionvalue = sessionStorage.pass
            if(username.value == sessionkey && password.value == sessionvalue){
                console.log('succes')
                window.location.replace("dashboard.html")
            }else{
                console.log('wrong pass')
                alert('Wrong Input! Please try again or hit register.')
            }
            
        }
        e.preventDefault()
    })
})