import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {

  const [move, setmove] = useState("");

  function movenav(value){
      setmove(value)
    }
  return (
    <div>

<div className="side-nav" style={{marginLeft: move}}>
        <h2 onClick={()=> movenav("-85%")} className="back-icon">
        <RxCross2 />
        </h2>
        <div className="nav-title">
            <a href="#home"><p>Home</p></a>
                <a href="#About Us"><p>About us</p></a>
                <a href="#Skills"><p>Skills</p></a>
                <a href="#projects"><p>Projects</p></a>
                <button className='contact-btn'> <a href="#Contact Us">Contact Us</a></button>
            </div>
      </div>

      <div className='nav-manu'>
        <div>
          <h2 style={{fontWeight:"450"}}>Vignesh M</h2>
          </div>
          <div className='menus'>
          <a href="#home"><p>Home</p></a>
                <a href="#About Us"><p>About us</p></a>
                <a href="#Skills"><p>Skills</p></a>
                <a href="#projects"><p>Projects</p></a>
                <button className='contact-btn'> <a href="#Contact Us">Contact Us</a></button>
          </div>
<div onClick={()=> movenav("0px")} className='bar'>
<FaBarsStaggered />
</div>
      </div>
   
    </div>
  )
}

export default Navbar