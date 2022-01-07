import "./intro.scss"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Particles from "react-tsparticles";
import React from "react"

class Intro extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
    render() {
    return (
        <section className="intro" id="intro">

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
                "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
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
                area: 800,
                },
                value: 16,
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
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Justin Cook</h1>
                    <h2>Web Developer <br></br></h2>
                    <p>Hi, my name is Justin. <br></br></p>
                </div>
            </div>


            
        </section>
    )}
}

export default Intro