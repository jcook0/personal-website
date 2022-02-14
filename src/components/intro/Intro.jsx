import "./intro.scss"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Particles from "react-tsparticles";
import React, {useRef} from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactTooltip from "react-tooltip";
import Typewriter from "typewriter-effect";

class Intro extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    //Hi, my name is Justin. Currently, I am a college student majoring in CS. My skillset includes Java, Python, C, PHP, and JavaScript.




    render() {
        return (
            <section className="intro" id="intro" onScroll = {this.props.onScroll} ref={this.props.introRef}>

                <Particles
                    canvasClassName="canvas-particles"
                    id="tsparticles"

                    options={{
                        fpsLimit: 60,
                        fullScreen: { enable: false },
                        interactivity: {
                        modes: {
                            bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                            },
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 200,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            "value": ["#BD10E0","#FFFFFF","#3399ff","#FFD300","#E86363"]
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.3,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 900,
                            },
                            value: 12,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 4,
                        },
                        },
                        detectRetina: true,
                    }}
                />

                <div className="left">
                    <div className="imgContainer">
                        <img src="../../assets/reactlogo.png"></img>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h1>Justin Cook</h1>
                        <h2><Typewriter
  
                            options = {{
                                loop: true,
                                delay: 75,
                            }}

                            onInit={(typewriter)=> {

                            

                            typewriter
                            
                            .typeString("Sample text")
                                
                            .pauseFor(8000)
                            .deleteAll()
                            .typeString("CS Student")
                            .pauseFor(8000)
                            .deleteAll()
                            .start();
                            }}
                        /></h2>
                    
                        <p> <br></br></p>
                        <div className="links">
                            <a className ="intro-link" target="_blank" href="https://www.linkedin.com/in/justin-c-9268a5218/" >
                                <LinkedInIcon data-tip data-for="linkedinTip"/>
                                <ReactTooltip id="linkedinTip" place="top" effect="solid">
                                    @justin-c-9268a5218
                                </ReactTooltip>
                            </a>
                            <a className ="intro-link" target="_blank" href="#">
                                <MailOutlineIcon data-tip data-for="emailTip"/>
                                <ReactTooltip id="emailTip" place="top" effect="solid">
                                    jcook@jcook.com
                                </ReactTooltip>
                            </a>
                            <a className ="intro-link" target="_blank" href="#">
                                <GitHubIcon data-tip data-for="githubTip"/>
                                <ReactTooltip id="githubTip" place="top" effect="solid">
                                    @jcook0
                                </ReactTooltip>
                            </a>  
                            <a className ="intro-link" target="_blank" href="#">
                                <TwitterIcon data-tip data-for="twitterTip"/>
                                <ReactTooltip id="twitterTip" place="top" effect="solid">
                                    @jcook13
                                </ReactTooltip>
                            </a>                                  
                        </div>
                    </div>
                </div>
            </section>
        )}
}

export default Intro