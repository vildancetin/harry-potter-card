import CharacterStyle from "./Character.module.css";
import { Card, Col } from "react-bootstrap";

const Character = ({ name, house, image ,id}) => {
  return (
    <div>
      {(

          <Col key={id}>
        <Card style={{ width: "18rem",height:"30rem"}}>
          <Card.Img src={image} alt="..."  style={{height:"25rem"}}/>
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
          </Card>
          </Col>

      )}
    </div>
  );
};

export default Character;
