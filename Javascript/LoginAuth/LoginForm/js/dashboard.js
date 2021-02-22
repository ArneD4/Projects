var sessionkey = sessionStorage.user
var sessionvalue = sessionStorage.pass
var userNameDisplay = document.querySelectorAll('h1')
var buttons = document.querySelectorAll('a')



console.log(sessionkey, sessionvalue)
console.log(userNameDisplay)
console.log(buttons)



userNameDisplay[0].innerHTML = `Welcome ${sessionkey}`


buttons.forEach(function(a){
    a.addEventListener('click',function(e){
        if(a.className = 'btn btn-primary btn-lg logout'){
            console.log('logout')
            sessionStorage.clear();
            window.location.replace("index.html")
        }
        e.preventDefault()
    })
})