import { useState } from "react";
import CharacterStyle from "./Character.module.css";
import { Card, Col, ListGroup } from "react-bootstrap";
export const Character = (props) => {

  const [flip,setFlipped]=useState(false)
  const { name, image, id,} = props
  return (
    <div onClick={()=>{setFlipped(!flip)}}>
      {flip ? <ToggleCard {...props}/> : (
        <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img src={image} alt="..." style={{ height: "25rem" }} />
        <Card.Body>
          <Card.Text>{name} </Card.Text>
        </Card.Body>
      </Card>
      )}
      
    </div>
  );
};

export const ToggleCard = ({ species, house, patronus, image, name }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={CharacterStyle.title}>
        <Card.Title >{name.toUpperCase()}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{house}</ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>{patronus}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
