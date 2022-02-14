import React from 'react'
import "./Contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact({darkMode}) {
    const linkedIn = {
        color: "#0072b1"
    }

    const twitter = {
        color: "#1DA1F2"
    }

    return (
        <section id="contact" className={"contact " + (darkMode && "darkmode")}>
            <h1 className="section-title">Contact Me</h1>
            <div className="contact-wrapper">
                <div className="box">
                    <a target="_blank" href="https://www.linkedin.com/in/justin-c-9268a5218/">
                        <LinkedInIcon style={linkedIn}/>
                        <p>Justin Cook</p>
                    </a>
                </div>
                <div className="box">
                    <a target="_blank" href="#">
                        <MailOutlineIcon/>
                        <p>jcook@jcook.com</p>
                    </a>
                </div>
                <div className="box">
                    <a target="_blank" href="https://github.com/jcook0">
                        <GitHubIcon/>
                        <p>@jcook0</p>
                    </a>
                </div>    
                <div className="box">
                    <a target="_blank" href="#">
                        <TwitterIcon style={twitter}/>
                        <p>@jcook13</p>
                    </a>
                </div> 
            </div><br></br><br></br>
        </section>
    )
}
