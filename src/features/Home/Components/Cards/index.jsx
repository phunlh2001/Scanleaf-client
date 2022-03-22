import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "./Card.scss";

HomeCard.propTypes = {
  usage: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

HomeCard.defaultProps = {
  usage: "",
  name: "",
  image: "",
};

function HomeCard(props) {
  const { product } = props;

  return (
    <div className="cards" key={product.id}>
      <Card>
        <CardImg
          top
          width="100%"
          height="144rem"
          src={product.image}
          className="card-img"
        />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>
            {product.usage ? `${product.usage.substring(0, 100)}...` : ""}
          </CardText>
        </CardBody>
        <Button outline color="primary" size="sm">
          Read More
        </Button>
      </Card>
    </div>
  );
}

export default HomeCard;
