import "./topbar.scss";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Topbar({menuOpen, setMenuOpen, passedIntro, darkMode, setDarkMode}) {

    return (
        <div className=
        {"topbar " + (menuOpen && "active ") + " " +
         (passedIntro && "scrolled")}
        >
            <div className = "wrapper">
                <div className ="left">
                    <h1>Justin Cook</h1>
                    <div className = "itemContainer">
                        
                    </div>
                </div>
                <div className ="right">

                    <DarkModeIcon onClick = {()=>setDarkMode(!darkMode)} className={"icon " + (darkMode && "darkmode")}></DarkModeIcon>
                    <LightModeIcon onClick = {()=>setDarkMode(!darkMode)} className={"icon " + (!darkMode && "darkmode")}></LightModeIcon>

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
