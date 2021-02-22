import { FaStar } from "react-icons/fa"
import { Container, Row, Col } from 'reactstrap';

const HomeMenu = () => {
    return ( 
        
<div className="container1 ">

  <div className="row2">
    <div className="col-md-3 column">
      <div className="card gr-1">
        <div className="txt">
          <h1>DICE</h1>
          <p>Throw dice against the computer</p>
          <FaStar className='ico'/>
      </div>
      </div>
    </div>



    <div className="col-md-3 column">
      <div className="card gr-2">
        <div className="txt">
          <h1>JUMP</h1>
          <p>Jump over obstacles</p>
        <FaStar className='ico'/>
      </div>
      </div>
    </div>



    <div className="col-md-3 column">
      <div className="card gr-3">
        <div className="txt">
          <h1>SNAKE</h1>
          <p>Play the classic snake game</p>
          <FaStar className='ico'/>
      </div>
      </div>
    </div>
</div >

</div >
     );
}

export default HomeMenu;