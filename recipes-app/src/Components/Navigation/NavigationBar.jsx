import { Link } from 'react-router-dom';
import { navData } from '../../lib/navData';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../../CSS/NavBar.css'

const NavigationBar = ({ data }) => {

    const { open, toggleOpen } = data;

    return (
        <div className={open ? "side-nav" : "side-navClosed"}>
            <div className="menuBtnDiv" onClick={toggleOpen}>
                <button className="menuBtn">
                    {open ? <KeyboardDoubleArrowLeftIcon className="arrowIcon" /> : <KeyboardDoubleArrowRightIcon className="arrowIcon" />}
                </button>
            </div>
            {navData.map(item => {
                return <Link key={item.id} className="side-item" to={item.link}>
                    {item.icon}
                    <span className={open ? "linkText" : "linkTextClosed"}>{item.text}</span>
                </Link>
            })}
        </div>
    )
}
export default NavigationBar;