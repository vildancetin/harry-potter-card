import { useEffect, useState } from "react";
import CardStyle from "./CardContainer.module.css";
import axios from "axios";
import Character from "../character/Character";

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
        <div className={"row"}>
          <div className={"col-md-3"}>
            {data.map((character) => (
              <Character key={character.id} {...character} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default CardContainer;
