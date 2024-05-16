// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from "../../assets/images/logo2.png"

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to='/recipes'>Get Recipes</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li>
        <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
      </li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img src={logo} className={styles.logo} alt="chef hat" />
      </NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
