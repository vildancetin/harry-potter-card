import { useState } from "react";
import CharacterStyle from "./Character.module.css";
import { Card, Col, ListGroup } from "react-bootstrap";
export const Character = (props) => {
  const [flip, setFlipped] = useState(false);
  const { name, image, id,house } = props;
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
          <Card.Body className={`${
          house === "Slytherin"
            ? CharacterStyle["title-sly"]
            : house === "Gryffindor"
            ? CharacterStyle["title-gry"]
            : house === "Hufflepuff"
            ? CharacterStyle["title-huf"]
            : CharacterStyle["title-rav"]
          }`}>
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
        } text-center`}
      >
        <Card.Title className={CharacterStyle.toggleName}>{name.toUpperCase()}</Card.Title>
      </Card.Body>
      <ListGroup  className={`${CharacterStyle.list} list-group-flush`}>
        <ListGroup.Item className={`${
          house === "Slytherin"
            ? CharacterStyle["listItem-sly"]
            : house === "Gryffindor"
            ? CharacterStyle["listItem-gry"]
            : house === "Hufflepuff"
            ? CharacterStyle["listItem-huf"]
            : CharacterStyle["title-rav"]
          }`} >{house}</ListGroup.Item>
        <ListGroup.Item className={`${
          house === "Slytherin"
            ? CharacterStyle["listItem-sly"]
            : house === "Gryffindor"
            ? CharacterStyle["listItem-gry"]
            : house === "Hufflepuff"
            ? CharacterStyle["listItem-huf"]
            : CharacterStyle["listItem-rav"]
          }`}>{species}</ListGroup.Item>
        <ListGroup.Item className={`${
          house === "Slytherin"
            ? CharacterStyle["listItem-sly"]
            : house === "Gryffindor"
            ? CharacterStyle["listItem-gry"]
            : house === "Hufflepuff"
            ? CharacterStyle["listItem-huf"]
            : CharacterStyle["listItem-rav"]
          }`}>{patronus}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
