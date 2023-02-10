import React from 'react'
import { Link } from 'react-router-dom';
import { navData } from '../../lib/navData';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import '../../CSS/NavBar.css'

const NavigationBar = () => {

    return (
        <div className="sidenav" >
            <button className="menuBtn">
                <KeyboardDoubleArrowLeftIcon />
            </button>
            {navData.map(item => {
                return <Link key={item.id} className="sideitem" to={item.link}>
                    {item.icon}
                    <span className="linkText">{item.text}</span>
                </Link>
            })}
        </div>
    )
}
export default NavigationBar;