import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Light from '../light.svg';
import Dark from '../dark.svg'


function Navbar() {
    const {theme, changeTheme} = useTheme();


  return (
    <nav style={{boxShadow:'1px 2px 9px #1589FF'}}>
        <h1>Ecommerce Shop</h1>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

        {theme === 'dark' &&
               <img
                   src={Light}
                   alt="Light Theme"
                   style={{ 'width': '25px', 'cursor': 'pointer' }}
                   onClick={() => changeTheme('light')} />
           }
           {theme === 'light' &&
               <img
                   src={Dark}
                   alt="Dark Theme"
                   style={{ 'width': '25px', 'cursor': 'pointer' }}
                   onClick={() => changeTheme('dark')} />
           }

    </nav>
  )
}

export default Navbar



