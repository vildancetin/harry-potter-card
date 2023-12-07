import { useEffect, useState } from "react";
import CardStyle from "./CardContainer.module.css";
import axios from "axios";
import {Character,ToggleCard} from "../character/Character";
import { Container, Row, Col } from "react-bootstrap";

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [input,setInput]=useState("")
console.log(input)

const filteredCard= data.filter((card)=>(card.name.toLowerCase().includes(input.toLowerCase())))
console.log(filteredCard)
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
           <input type="text" className={"mx-auto d-flex"} placeholder="Search the character..." size={30} onChange={(e)=>setInput(e.target.value)} value={input}/>

          <Row xs={1} md={3} className="g-4" >
            {
              input==="" ? (
                data.filter((char)=>(
                char.image !== ""
              )).map((character) => (
                <Character key={character.id} {...character}/>
              ))
              ) : (
                filteredCard.filter((card)=>(
                  card.image!==""
                )).map((card)=>(<Character key={card.id} {...card}/>))
              )
              
            }
          </Row>
        </Container>
      )}
    </main>
  );
};

export default CardContainer;
