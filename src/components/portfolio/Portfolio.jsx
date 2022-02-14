import React, {useRef} from 'react'
import "./portfolio.scss"

export default function Portfolio({darkMode}) {

    

    return (
        <>
        <section  id="portfolio" className={"portfolio "+(darkMode && "darkmode")}>
            <h1 className="section-title">My Projects</h1>
            <div className="portfolio-wrapper">
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src={require('../../assets/reactlogo.png')} ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack.Built using MERN stack. Built using MERN stack.Built using MERN stack. Built using MERN stack. Built using MERN stack. Built using MERN stack.Built using MERN stack. Built using MERN stack. Built using MERN stack. Built using MERN stack. wd wad wad jwa8wduwauw uuwua ee fwfe sfes fes fes fes fes fesfe udu wauu udwuau end</p>
                    </div>
                </div>
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src="../../assets/reactlogo.png" ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack.</p>
                    </div>
                </div>
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src="../../assets/reactlogo.png" ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack.</p>
                    </div>
                </div>
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src="../../assets/reactlogo.png" ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack.</p>
                    </div>
                </div>
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src="../../assets/reactlogo.png" ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack.</p>
                    </div>
                </div>
                <div className="project" >
                    <div className="title">Personal Website</div>
                    <img className="icon" src="../../assets/reactlogo.png" ></img>
                    <a className="link" href="">github.com/</a>
                    <div className="desc">
                        <p>Built using MERN stack. </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
