import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.instagram.com/jjustinsong/">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/jjustinsong/">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/jjustinsong">
                    <GitHubIcon />
                </a>
                <p> &copy; 2024 Justin Song</p>
            </div>
        </div>
    )
}

export default Footer