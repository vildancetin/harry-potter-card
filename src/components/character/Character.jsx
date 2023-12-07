import { useState } from "react";
import CharacterStyle from "./Character.module.css";
import { Card, Col, ListGroup } from "react-bootstrap";
export const Character = (props) => {
  const [flip, setFlipped] = useState(false);
  const { name, image, id } = props;
  return (
    <div
      onClick={() => {
        setFlipped(!flip);
      }}
    >
      {flip ? (
        <ToggleCard {...props} />
      ) : (
        <Card style={{ width: "18rem", height: "30rem" } } className={CharacterStyle.card}>
          <Card.Img src={image} alt="..." style={{ height: "25rem" }} />
          <Card.Body>
            <Card.Text className={CharacterStyle.name}>{name} </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export const ToggleCard = ({ species, house, patronus, image, name }) => {
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={image} style={{ height: "20rem" }} />
      <Card.Body
        className={`${
          house === "Slytherin"
            ? CharacterStyle["title-sly"]
            : house === "Gryffindor"
            ? CharacterStyle["title-gry"]
            : house === "Hufflepuff"
            ? CharacterStyle["title-huf"]
            : CharacterStyle["title-rav"]
        }`}
      >
        <Card.Title>{name.toUpperCase()}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{house}</ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>{patronus}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
