import "./topbar.scss";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className = "wrapper">
                <div className ="left">
                    <h1>Justin Cook</h1>
                    <div className = "itemContainer">
                        
                    </div>
                </div>
                <div className ="right">

                    <DarkModeIcon className="icon"></DarkModeIcon>

                    <div className="hamburger" onClick ={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
