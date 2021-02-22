sessionStorage.user =''
sessionStorage.password=''

var sessionkey = sessionStorage.user
var sessionvalue = sessionStorage.value

// sessionStorage.user='atilla'
// sessionStorage.pass='123456'


console.log(sessionStorage)
console.log(sessionkey, sessionvalue)

if(sessionkey == null || sessionvalue == null){
    console.log('have to login')
    window.location.replace("login.html")

}

/*visitors
if user and pass not null
 then rederict: dahsboard

if user and pass  is null   
 then rederict: login page


    /*
    login.js/*
    in login page if visitor doenst have account
    then click register 
    or
    click login and create session into sessionStorage .user and .pass 
    if succes redirect to :dahsboard
    if not ask again

        */

        /*
        register.js
        validate inputs empty
        if not then create sessoin here
        and redirect to dashboard auto
        
        */

        /*
        dashboard
        print username from sessionstorage
        logout > clear sessoins
        
        */