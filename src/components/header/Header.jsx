import HeaderStyle from "./Header.module.css"
import image from "../../assets/logo.png"
const Header = () => {
  return (
    <header>
        <img src={image} alt="" className={"mx-auto d-block"}/>
        <h1 className={"text-center"}>Harry Potter Characters</h1>
        <input type="text" className={"mx-auto d-flex"} placeholder="Search the character..." size={30}/>
    </header>
  )
}

export default Header