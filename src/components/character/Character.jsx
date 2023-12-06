import CharacterStyle from "./Character.module.css";
const Character = ({ name, house, image }) => {
  return (
    <div >

        <div class={"card"}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{name}</p>
          </div>
        </div>
      </div>
  );
};

export default Character;
