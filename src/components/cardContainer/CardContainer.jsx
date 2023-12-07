import { useEffect, useState } from "react";
import CardStyle from "./CardContainer.module.css";
import axios from "axios";
import Character from "../character/Character";
import { Container, Row, Col } from "react-bootstrap";

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetcData();
  }, []);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Row xs={1} md={3} className="g-4">
            {
              data.filter((char)=>(
                char.image !== ""
              )).map((character) => (
                <Character key={character.id} {...character} />
              ))
            }
          </Row>
        </Container>
      )}
    </main>
  );
};

export default CardContainer;
