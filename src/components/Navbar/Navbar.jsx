
import "./Navbar.css"
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div className='nav-manu'>
        <div>
          <p>Vignesh .M</p>
          </div>
          <div className='menus'>
            <p>Home</p>
            <p>About Me</p>
            <p>Skills</p>
            <p>Projects</p>
            <button className='contact-btn'>Contact Me</button>
          </div>
<div className='bar'>
<FaBarsStaggered />
</div>
      </div>

      <div className='sidebar-menu'>
            <p>Home</p>
            <p>About Me</p>
            <p>Skills</p>
            <p>Projects</p>
            <button className='contact-btn'>Contact Me</button>
      </div>
    </div>
  )
}

export default Navbar