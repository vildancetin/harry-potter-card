import { useEffect, useState } from "react";
import CardStyle from "./CardContainer.module.css";
import axios from "axios";
import {Character,ToggleCard} from "../character/Character";
import { Container, Row, Col } from "react-bootstrap";

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle,setToggle]=useState(false)

  const handleSwap=()=>{
    setToggle(!toggle)
    console.log(toggle)
  }
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
           <input type="text" className={"mx-auto d-flex"} placeholder="Search the character..." size={30}/>
          <Row xs={1} md={3} className="g-4" >
            {
              data.filter((char)=>(
                char.image !== ""
              )).map((character) => (
                // <div onClick={handleSwap}>
                //   {toggle 
                //   ? <ToggleCard key={character.id} {...character}/> 
                //   : <Character key={character.id} {...character}/>  }
                // </div>
                <Character key={character.id} {...character}/>
              ))
            }
          </Row>
        </Container>
      )}
    </main>
  );
};

export default CardContainer;
