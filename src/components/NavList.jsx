import { Link, NavLink } from "react-router-dom"



const NavList = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className= {
                    ({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`
                } aria-current="page" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={
                    ({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`
                } to="about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={
                    ({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`
                } to="contact">Contact</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default NavList
