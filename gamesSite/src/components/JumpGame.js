import { useState, clearState } from "react";
import Modal, { setAppElement } from 'react-modal'
import { Container } from 'reactstrap';

const JumpGame = () => {
    var audio = new Audio('http://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/jump.wav');
    var audio2 = new Audio('http://web.mit.edu/GRAPHICS/src/tuxpaint-0.9.12/data/sounds/bleep.wav');
    var audio3 = new Audio('http://www.mario-museum.net/sons/smb_gameover.wav');
    var character = document.getElementById("character");
    var block = document.getElementById("block");
    let timeLeft = 3;
    var userScore = 0;
    const [countDown, setCountdown] = useState(timeLeft);
    const [score, setScore] = useState(userScore);
    const [modalIsOpen, setModalIsOpen] = useState(false);






    const startGame = () => {
        audio2.play();
        setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0)
            } else {
                timeLeft -= 1
                setCountdown(timeLeft)
                audio2.play();
            }
        }, 1000)

        setTimeout(function () {
            (document.getElementById("block")).style.animation = " block 1s infinite";
            const checkDead = setInterval(function () {
                var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
                var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
                if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
                    setModalIsOpen(true);
                    block.style.animation = "none";
                    audio3.play();
                    clearInterval(checkDead)
                }else if(character === null || block === null){
                    return
                }
                else{
                    userScore++
                    setScore(userScore)
                }

            }, 10)
        }, 4000)
    }

    const jump = () => {
        if (character.classList != "animate") {
            character.classList.add("animate")
        }
        setTimeout(function () {
            character.classList.remove("animate")
        }, 500)

    }

    return (

        <div className="jumpgame">
            <div className="top">
                <h1>JUMP GAME</h1>
                <button onClick={() => { startGame(); }}>
                    start
                        </button>
                <h3><span>{countDown}</span></h3>
                <h5>Score: {score}</h5>
            </div>
            <div id="game" onClick={() => { jump(); audio.play()}}>
                <div id="character"></div>
                <div id="block"></div>
            </div>
            <Container id="mod">
                <Modal className="Modal" ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false); timeLeft = 3; setCountdown(timeLeft); setScore(0) }}>
                    <h1>Game Over!</h1>
                    <h2>Your Score: {score}</h2>
                </Modal>
            </Container>
        </div>
    );
}

export default JumpGame;