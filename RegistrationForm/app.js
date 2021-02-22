var [firstname, lastname, email, street, city, zipcode,birthdate,phone,pass,confirm_pass,term] = document.querySelectorAll('input');  

var [country,gender,country_code] = document.querySelectorAll('select');
var birthdate = document.querySelector('#Date');
var term = document.querySelector('#chb')

var submitBtn = document.querySelector('button');

let formDatas=[]

const userMgmt = {
    addUser:function(firstname,lastname,email,street,city,zipcode,birthdate,phone,pass,confrim_pass,term,country,gender,country_code){
    let user = `FIRSTNAME: ${this.firstname}\nLASTNAME: ${this.lastname}\nEMAIL: ${this.email}\nSTREET: ${this.street}\nCITY: ${this.city}\nZIPCODE: ${this.zipcode}\nBIRTHDATE: ${this.birthdate}\nPHONE: ${this.phone}\nPASSWORD: ${this.pass}\nCONFIRM_PASSWORD: ${this.confirm_pass}\nTERM: ${this.term}\nCOUNTRY: ${this.country}\nGENDER: ${this.gender}`
    console.log(user)
    result.innerText = user
    }
}


submitBtn.addEventListener('click',function(e){

    if(term.checked == true){
        console.log('accepted')
        let formObj = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            street:street.value,
            city:city.value,
            country:country.selectedOptions[0].value,
            zipcode:zipcode.value,
            birthdate:birthdate.value,
            gender:gender.selectedOptions[0].value,
            phone:country_code.selectedOptions[0].value + phone.value, //(countrycode) + (given phonenumber)
            pass:pass.value,
            confirm_pass:confirm_pass.value,
            term:term.value
        }
       
        console.log(formObj)
        userMgmt.addUser.apply(formObj)
        
    }else{
        console.log('not accepted')
    }
    e.preventDefault();

});