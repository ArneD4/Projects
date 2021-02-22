let operators = ["+","-","*","/"]




var number1 = Math.round(Math.random()*99);
var number2 = Math.round(Math.random()*99);
var operator = operators[Math.round(Math.random()*3)];
let result;
var answer = document.getElementById('answer');




question.innerHTML = number1 + operator + number2;


console.log(number1)
console.log(operator)
console.log(number2)


// | replaced by eval() |
// V                    V

// function calc(){
//     if(operator === "+"){
//         return number1 + number2
//     }else if (operator === "-"){
//         return number1 - number2
//     }else if (operator === "*"){
//        return number1 * number2
//     }else{
//         return number1 / number2
//     }  
// }

// result = calc();


function calcCheck(){
    console.log(Number(answer.value)) //this one
   // console.log(answer.value) not this one
    let correct_answer = eval(number1 + operator + number2)
    console.log(correct_answer)
    if(correct_answer == Number(answer.value)){
        console.log('correct')    
        correct.innerHTML++
        
    }else{
        console.log('wrong')  
        incorrect.innerHTML++
        
    }
    
}


check.addEventListener('click',calcCheck)

