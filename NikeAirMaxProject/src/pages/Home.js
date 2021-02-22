import React from 'react'
import { nikeAir } from "../data";
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

function Home() {
    return (
        <Container className="m-auto">
            <h1>Nike Air Max</h1>
            <div className="gallery">

                {nikeAir.map((item, i) => {
                    return (

                        <Link className="link" target="_blank" key={i} to={`${item.image}`} style={{ 'display': 'block' }}>
                            <img src={item.image} className="gallery-item" alt='hi'></img>
                        </Link>

                    )
                })}
            </div>
        </Container>
    )
}

export default Home
