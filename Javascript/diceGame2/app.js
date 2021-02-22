
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');

var counter1 = 0;
var counter2 = 0;

var gameCounter = 0;
let maxCounter = 20;


function dice1Image(){

    num1 = Math.floor(Math.random() * 6) + 1;
    

    if(num1 === 1){
        dice1.src = "Alea_1.png"
     }
     else if(num1===2){
        dice1.src = "Alea_2.png"
    
    }else if(num1===3){
        dice1.src = "Alea_3.png"
    
    }else if(num1===4){
        dice1.src = "Alea_4.png"
    
    }else if(num1===5){
        dice1.src = "Alea_5.png"
    }
    else{
        dice1.src = "Alea_6.png"
    }
}



function dice2Image(){

    num2 = Math.floor(Math.random() * 6) + 1;
    

    if(num2 === 1){
        dice2.src = "Alea_1.png"
     }
     else if(num2===2){
        dice2.src = "Alea_2.png"
    
    }else if(num2===3){
        dice2.src = "Alea_3.png"
    
    }else if(num2===4){
        dice2.src = "Alea_4.png"
    
    }else if(num2===5){
        dice2.src = "Alea_5.png"
    }
    else{
        dice2.src = "Alea_6.png"
    }
}
;

function rollDice(){
    dice1Image();
    dice2Image();

if(gameCounter<maxCounter){

    if(Number(num1)<Number(num2)){
        console.log('player 2 wins')
        result.innerText = 'Player 2 wins'
        counter2++
        count2.innerHTML = `Player 2 score: ${counter2}`
       
       
        
    }else if(Number(num1)>Number(num2)){
        console.log('player 1 wins')
        result.innerText = 'Player 1 wins'
        counter1++
        count1.innerHTML = `Player 1 score: ${counter1}`
        
    }else{
        console.log('equal')
        result.innerText = 'Equal'
    }


    gameCounter++
    gameCount.innerHTML = `Number of games played: ${gameCounter}`

}

else{ if(counter1>counter2){
    result.innerHTML = `Game end: Player 1 wins`
}
else if(counter1<counter2){
    result.innerHTML = `Game end: Player 2 wins`
}

else{
        result.innerHTML = `Game end: Equal`
    }
}



    





    console.log(counter1)
    console.log(counter2)

}

