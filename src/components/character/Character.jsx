import CharacterStyle from "./Character.module.css";
import { Card, Col, Row } from "react-bootstrap";

const Character = ({ name, house, image }) => {
  return (
    <div>
      {image ? (
        <Row xs={1} md={3}>
          <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={image} alt="..." />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
          </Card>
          </Col>
        </Row>

        
      ) : null}
    </div>
  );
};

export default Character;
