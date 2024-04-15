import React from 'react'
import "../styles/Projects.css"

function Projects() {
    return (
        <div className="projects">
            <div className="flwr-man">
                <img className="flwrPicture" src={require("../assets/flwr-man.jpg")} alt="FLWR-MAN"/>
                <h2 className="flwrTitle">FLWR-MAN</h2>
                <p className="flwrDescription">Simple game with a 2D array-powered map and a movable/customizable character. Objective is to enter all portals and collect all the flowers.</p>
                <p className="flwrLanguages">Java</p>
                <a className="flwrLink" href='https://github.com/jjustinsong/flwr-man' target='_blank' rel='noreferrer'>GitHub</a>
            </div>
            <div className="project2">
                <h2 className="project2Title">SOON</h2>
            </div>
            <div className="project3">
                <h2 className="project3Title">SOON</h2>
            </div>
        </div>
    )
}

export default Projects

