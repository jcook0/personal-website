import React from 'react'
import "./Contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {


    const linkedIn = {
        color: "#0072b1"
    }

    const twitter = {
        color: "#1DA1F2"
    }

    return (
        <section className="contact" id="contact">
            <h1 className="section-title">Contact Me</h1>
            <div className="contact-wrapper">
                <div className="box">
                    <a href="https://www.linkedin.com/in/justin-c-9268a5218/">
                        <LinkedInIcon style={linkedIn}/>
                        <p>Justin Cook</p>
                    </a>
                </div>
                <div className="box">
                    <a>
                        <MailOutlineIcon/>
                        <p>jcook@jcook.com</p>
                    </a>
                </div>
                <div className="box">
                    <a>
                        <GitHubIcon/>
                        <p>@jcook0</p>
                    </a>
                </div>    
                <div className="box">
                    <a>
                        <TwitterIcon style={twitter}/>
                        <p>@jcook13</p>
                    </a>
                </div>
            </div>
        </section>
    )
}
