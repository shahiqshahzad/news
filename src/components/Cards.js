import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Cards = ({ news }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {news.urlToImage !== null ? (
          <Card.Img variant="top" src={news.urlToImage} alt={news.title} />
        ) : (
          <div className="text-center">NO Image in api response</div>
        )}
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.description}</Card.Text>
          <Link to={news.url}>
            <Button variant="primary">More</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
