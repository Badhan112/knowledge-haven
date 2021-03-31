import React from 'react';
import { Button, Col, Card, Image } from 'react-bootstrap';

const BookInfoCard = ({ book }) => {
    const { _id, name, author, price, imgUrl } = book;
    return (
        <Col sm={12} md={6} lg={4} className="p-3">
            <Card className="p-3 shadow ">
                <div className="p-5 bg-light" style={{borderRadius: "10px"}}>
                    <Card.Img variant="top" src={imgUrl} style={{height: "250px"}} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{author}</Card.Text>
                    <div className="d-flex justify-content-between" style={{width: "100%"}}>
                        <h3>${price}</h3>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookInfoCard;