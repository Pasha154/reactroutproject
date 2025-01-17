import {useContext} from "react";
import { NavLink, Outlet } from "react-router-dom";
import {ThemeContext} from "../../context/ThemeContext";

import './Layout.css';

export default function Layout() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className='container'>

            <div className={`header-${theme}`}>
                <NavLink className='li' to='/'>Home</NavLink>
                <NavLink className='li' to='/contacts'>Contacts</NavLink>
                <NavLink className='li' to='/form'>Form</NavLink>
                <NavLink className='li' to='/aboutme'>AboutMe</NavLink>
                <button onClick={toggleTheme}>ChangeTheme</button>
            </div>


            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}
