import React from 'react'
import "../styles/Home.css";
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);

    return (
        <div className="home">
            <div className="me">
                <p className="hello">Hello World! I'm</p>
                <h2 className="name">Justin Song</h2>
                <div className="typewriter">
                    <Typewriter
                        options={{loop: true}}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Full-stack Developer").pauseFor(2000).deleteAll()
                            .typeString("Innovator").pauseFor(2000).deleteAll()
                            .typeString("Technology Enthusiast").pauseFor(2000).deleteAll()
                            .typeString("Student").pauseFor(2000).deleteAll()
                            .start();
                        }}
                    />
                </div>
            </div>
            <div className="picture">
                <img className="headshot" src={require("../assets/headshot.jpg")} alt="Headshot"/>
            </div>
        </div>
    )
}

export default Home
