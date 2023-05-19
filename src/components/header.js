import Trollface from "../image/Troll Face.png"

export default function Header(params) {
    return(
       <header className="header">
        <img src={Trollface} alt="logo" className="header-logo" />
        <h2 className="header-cont">Meme Generator</h2>
        <h4 className="headercont-2">React Course - Project 3</h4>
       </header> 
    )
}