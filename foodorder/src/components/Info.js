
import StarRatingComponent from 'react-star-rating-component';
import { FaStar, FaBiking, FaPhoneAlt } from "react-icons/fa"
import { Container, Row, Col } from 'reactstrap';

const Info = ({ products }) => {
    return (
        <Container className="rest">
            <Row>
            <Col md={6} className='info'>
                <h1>{products["restaurant-info"].name}</h1>
                <StarRatingComponent
                    name={'rating'}
                    value={Number(products["restaurant-info"].rating) + 4.3}
                    renderStarIcon={() => <span><FaStar /></span>}
                    starCount={5}
                    starColor={'#ffb327'}
                    emptyStarColor={'#505050'}
                    editing={false}
                />
                <h4>Rating:{Number(products["restaurant-info"].rating) + 4.3}</h4>
                <div className="extra">
                <p>Cuisine: {products["categorys"][0]["menu-items"][0]["sub-items"][0].cuisine_name} - 
                Delivery Fee: ${(products["restaurant-info"]["delivery-fee"]) / 10} - 
                {products["restaurant-info"].address} 
                </p>
                </div>
                <button><FaPhoneAlt/> Contact Restaurant</button>
            </Col>
            <Col md={3} className="image">
                <img src={products["restaurant-info"].logo}></img>
                <span>
                    <div className="icon">
                    <FaBiking/> 
                    <p>
                    Average Delivery Time: {products["restaurant-info"].avg_delivery_time} min
                    </p>
                    </div>
                </span>
                
            </Col> 
            </Row> 
        </Container>
    );
}

export default Info;