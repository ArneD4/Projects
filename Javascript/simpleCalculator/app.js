// html element

var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var result = document.getElementById('result');

result.innerText =""
num1.value='55'
num2.value='66'

function sum(){
    // console.log(num1.value)
    // console.log(num2.value)
    console.log(Number(num1.value) + Number(num2.value))
    return result.innerText=` = ${Number(num1.value) + Number(num2.value)}`
   

}
function sub(){
    // console.log(num1.value)
    // console.log(num2.value)
    console.log(Number(num1.value) - Number(num2.value))
    return result.innerText=` = ${Number(num1.value) - Number(num2.value)}`
}

function mul(){
    // console.log(num1.value)
    // console.log(num2.value)
    console.log(Number(num1.value) * Number(num2.value))
    return result.innerText=` = ${Number(num1.value) * Number(num2.value)}`
}

function div(){
    // console.log(num1.value)
    // console.log(num2.value)
    console.log(Number(num1.value) / Number(num2.value))
    return result.innerText=` = ${Number(num1.value) / Number(num2.value)}`
}


//define function to find biggest number!

// findBiggestNumber(10,20);
//expected output => 20










function findBiggestNumber()
			{
				var x, y, biggest;
				x = Number(document.getElementById("numberA").value);
				y = Number(document.getElementById("numberB").value);
                var biggest = document.getElementById("biggest");
				if(x>y)
				{
					return biggest.innerText=`${x} is bigger`;
				}
				else if(y>x)
				{
					return biggest.innerText=`${y} is bigger`;
				}
            }

findBiggestNumber(10,20);
