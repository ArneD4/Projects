import React, { Component, useState } from 'react'
import Modal, { setAppElement } from 'react-modal'
import { Container } from 'reactstrap';
import Food from './Food'
import Snake from './Snake'

var audio1 = new Audio('http://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/jump.wav');
var audio2 = new Audio('http://web.mit.edu/GRAPHICS/src/tuxpaint-0.9.12/data/sounds/bleep.wav');
var audio3 = new Audio('http://www.mario-museum.net/sons/smb_gameover.wav');

const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y]
}

const initialState = {
        food: getRandomCoordinates(),
        speed: 200,
        direction: 'RIGHT',
        snakeDots: [
            [50, 50],
            [52, 50]
        ],
        modalOpen: false
}






class SnakeGame extends Component {
   
    constructor(props){
        super(props)
        this.state = initialState;
        this.firstInterval = null;
    }



    startGame = () => {
        audio2.play()
        this.firstInterval = setInterval(this.moveSnake, this.state.speed)
        document.onkeydown = this.onKeyDown;  
    }

    componentDidUpdate(){
        this.checkIfOutOfBorders();
        this.checkIfCollapsed();
        this.checkIfEat();        
    }





    onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
          case 38:
            if (!["UP", "DOWN"].includes(this.state.direction)) {
              this.setState({ direction: "UP" });
            }
            e.preventDefault();
            break;
          case 40:
            if (!["UP", "DOWN"].includes(this.state.direction)) {
              this.setState({ direction: "DOWN" });
            }
            e.preventDefault();
            break;
          case 37:
            if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
              this.setState({ direction: "LEFT" });
            }
            break;
          case 39:
            if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
              this.setState({ direction: "RIGHT" });
            }
            break;
        }
      };


  
    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1]
        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2];
                break;
            case 'UP':
                head = [head[0], head[1] - 2];
                break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots
        })
    }


    checkIfOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
            this.onGameOver();
        }
    }

    checkIfCollapsed(){
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length -1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] == dot[0] && head[1] == dot[1]){
                this.onGameOver();
            }
        })
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length -1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food[1]){
            this.setState({
                food: getRandomCoordinates()
            })
            audio1.play()
           this.enlargeSnake();
           this.increaseSpeed();
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];    
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake,

        })
    }

    increaseSpeed() {
        if(this.state.speed > 10) {
            this.setState({
                speed: this.state.speed -10
            })           
        }
    }


    onGameOver(){
        clearInterval(this.firstInterval)
        audio3.play()
        this.setState({
            food: getRandomCoordinates(),
            speed: 200,
            direction: 'RIGHT',
            snakeDots: [
                [50, 50],
                [52, 50]
            ],
            modalOpen: true
    }
    );
     
    return
    }

    render() {
        return (
            <div className="snakegame">
                <h1>snake game</h1>
                <h2 id='warning'>This game is not available on mobile... </h2>
                <button onClick={this.startGame}>Start</button>
                <div className="game-area">
                    <Snake snakeDots={this.state.snakeDots} />
                    <Food dot={this.state.food} />
                </div>
                <Container id="mod2">
                <Modal className="Modal" ariaHideApp={false} isOpen={this.state.modalOpen} onRequestClose={() => {this.setState({modalOpen:false})}}>
                    <h1>Game Over!</h1>
                </Modal>
            </Container>
            </div>
        )
    }
}

export default SnakeGame
