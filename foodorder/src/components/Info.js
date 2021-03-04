
import StarRatingComponent from 'react-star-rating-component';
import { FaStar, FaBiking, FaPhoneAlt } from "react-icons/fa"
import { Container, Row, Col } from 'reactstrap';

const Info = ({ menu }) => {
    return (
        <Container className="rest">
            <Row>
            <Col md={6} className='info'>
                <h1>{menu["restaurant-info"].name}</h1>
                <StarRatingComponent
                    name={'rating'}
                    value={Number(menu["restaurant-info"].rating) + 4.3}
                    renderStarIcon={() => <span><FaStar /></span>}
                    starCount={5}
                    starColor={'#ffb327'}
                    emptyStarColor={'#505050'}
                    editing={false}
                />
                <h4>Rating:{Number(menu["restaurant-info"].rating) + 4.3}</h4>
                <div className="extra">
                <p>Cuisine: {menu["categorys"][0]["menu-items"][0]["sub-items"][0].cuisine_name} - 
                Delivery Fee: ${(menu["restaurant-info"]["delivery-fee"]) / 10} - 
                {menu["restaurant-info"].address} 
                </p>
                </div>
                <button><FaPhoneAlt/> Contact Restaurant</button>
            </Col>
            <Col md={3} className="image">
                <img src={menu["restaurant-info"].logo}></img>
                <span>
                    <div className="icon">
                    <FaBiking/> 
                    <p>
                    Average Delivery Time: {menu["restaurant-info"].avg_delivery_time} min
                    </p>
                    </div>
                </span>
                
            </Col>
            </Row>
        </Container>
    );
}

export default Info;