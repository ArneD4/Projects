import React from "react";
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export const ArticleDetail = ({ single }) => {

  let { id } = useParams();

  return (
    <>
      <Container className="m-auto">
        <Row className="row">
          <Col className="detail">
            <Link className="detailLink" target="_blank" key={id} to={`../${single.image}`} style={{ 'display': 'block' }}>
              <img className="detailImg" src={`/image/img${(single.id) + 1}.jpg`} alt='hi'></img>
            </Link>

          </Col>
          <Col className="detail" id="right">
            <h3 className="detailTitle">{single.name} ({single.year})</h3>
            <p className="detailBody">{single.body}</p>
          </Col>
        </Row>
      </Container>

    </>
  );
};