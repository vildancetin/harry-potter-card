# Harry Potter Searching Card

This project aims to display character cards when the page is loaded. When a search is performed through the input, the desired card will appear on the screen. Additionally, clicking on a card will allow users to view more detailed information.
### Outcome
![harry-potter](https://github.com/vildancetin/harry-potter-card/assets/75564722/5abd4443-b2fd-4e31-b44e-5719671eb557)

### Add Dependencies
After determining the project structure, the required libraries were added. Once Bootstrap and the Axios library for data retrieval were added using yarn add, the process of fetching data from the API was implemented in the card component. Loading and data information were managed using states since they might change.
```bash
yarn add react-bootstrap axios
```
### Get Data

The API "https://hp-api.onrender.com/api/characters" was used.
```javascript
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

```
### Container
In the container section, data without image information were filtered out using the map function. Some objects in the API did not contain image information. The data from this mapping process was sent to the Character component as props.
```javascript
input===""
? (data.filter((char)=>(char.image !== ""))
.map((character) => (
<Character key={character.id} {...character}/>
))
)
: (
filteredCard.filter((card)=>(card.image!=="")).map((card)=>(<Character key={card.id} {...card}/>)))
```
An additional state was created in the container to store the input value. Filtering was applied based on whether the input was empty or contained data.
### Character Card
In the Character component, the desired appearance for each character was implemented, and different styling operations were applied based on the house information from the data. The component that will be displayed when the toggle operation is performed was created. A state was created to hold information about the toggle status. Different styling information was added for different houses.
```javascript
  const [flip, setFlipped] = useState(false);
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


export const ToggleCard = ({ species, house, patronus, image, name })
```
[Demo](https://harry-potter-card.netlify.app/)
I hope you like it! 😉
