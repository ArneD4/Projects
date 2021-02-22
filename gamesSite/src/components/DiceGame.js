import { useState } from "react";
import Modal from 'react-modal'
import { Container, Row, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from "react-icons/fa"


const DiceGame = () => {
    const [countUser, setCountUser] = useState(0)
    const [countComputer, setCountComputer] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [winner, setWinner] = useState('')

    var audio = new Audio("http://cd.textfiles.com/bearwarecd/GamChest/DICE.WAV");
    var audio2 = new Audio("http://starmen.net/mother1/music/08%20-%20MOTHER%20-%20You%20Won.mp3");
    var audio3 = new Audio('http://www.mario-museum.net/sons/smb_gameover.wav')
    

    const rollDice = (e) => {
        audio.play()
        //firstdice
        let randomNumb = Math.floor(Math.random() * 6) + 1;
        e.target.setAttribute('src', `img/Alea_${randomNumb}.png`)
        e.target.setAttribute('alt', 'dice')
        //seconddice
        let computerdice = e.target.parentElement.nextSibling.children[1]
        let randomNumb2 = Math.floor(Math.random() * 6) + 1;
        computerdice.setAttribute('src', `img/Alea_${randomNumb2}.png`)
        computerdice.setAttribute('alt', 'dice')
        //whowins

        if (randomNumb < randomNumb2) {
            setCountComputer(countComputer + 1)
            if (countComputer == 5) {
                setWinner("Computer won")
                audio3.play()
                setTimeout(() => { setModalIsOpen(true) }, 500)
            };
        } else if (randomNumb > randomNumb2) {
            setCountUser(countUser + 1)
            if (countUser == 5) {
                setWinner("You won")
                audio2.play()
                setTimeout(() => { setModalIsOpen(true) }, 500)
            };
        }
    }

    

    return (
        
        <div className="dicegame">
            {Modal.setAppElement(document.getElementById('#con'))}
            <Container id="con" >
                <Row >
                    <Col md={8} className="left">
                        <h1>DICE GAME</h1>
                        <div className='dicespan'>
                            <span className="dice">
                                <h4>You</h4>
                                <img src="img/Alea_1.png" id="userDice" alt="dice" onClick={rollDice}></img>
                            </span>
                            <span className="dice">
                                <h4>Computer</h4>
                                <img src="img/Alea_1.png" alt="dice" id="computerdice"></img>
                            </span>
                        </div>
                    </Col>
                    <Col md={4} className="score">
                        <h1>Score</h1>
                        <div className="result">
                            <h5>Computer:</h5>
                            <div className="StarRatings">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span><FaStar /></span>}
                                    starCount={6}
                                    value={countComputer}
                                    starColor={'#7ACAA5'}
                                />
                            </div>
                            <h5>You:</h5>
                            <div className="StarRatings">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span><FaStar /></span>}
                                    starCount={6}
                                    value={countUser}
                                    starColor={'#7ACAA5'}
                                />
                            </div>
                            <button onClick={() => { setCountComputer(0); setCountUser(0); setModalIsOpen(false) }}>Restart</button>
                        </div>
                    </Col>
                    <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false); setCountComputer(0); setCountUser(0); }}>
                        <h1>End of Game</h1>
                        <h2>{winner}</h2>
                    </Modal>
                </Row>
            </Container>
        </div>





    );
}

export default DiceGame;