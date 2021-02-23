import { FaStar, FaDice, FaStumbleupon, FaRunning } from "react-icons/fa"
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const HomeMenu = () => {
    return ( 
        
<Container className="container1">
  <Row>
      <Col md={3}>
      <Link to="/DiceGame">
      <h1>Dice Game</h1>
      <FaDice className="ico"/>
      </Link>
      </Col>

      <Col md={3}>
      <Link to="/JumpGame">
      <h1>Jump Game</h1>
      <FaRunning className="ico"/>
      </Link>
      </Col>

      <Col md={3}>
      <Link to="/SnakeGame">
      <h1>Snake Game</h1>
      <FaStumbleupon className="ico"/>
      </Link>
      </Col>

  </Row>
</Container>
     );
}

export default HomeMenu;