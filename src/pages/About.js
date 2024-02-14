import React from 'react';
import "../styles/About.css";
import {FaReact} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {PiFileSqlLight} from "react-icons/pi";
import {TbBrandNextjs} from "react-icons/tb";

function About() {
    return (
        <div className="about">
            <div className="paragraph">
                <h2 className="aboutMe">About me</h2>   
                <hr className="aboutMeLine" />
                <div className="pictureAndParagraph">
                    <img className="berkeley" src={require("../assets/berkeleycampus.jpeg")} alt="Berkeley"/>
                    <div className="paragraphs">
                        <p className="aboutMeParagraph">Hi! I'm Justin Song, a current student at UC Berkeley studying computer science. I'm well experienced in both back-end
                        and front-end development, but recently, I have been extremely interested in artificial intelligence/machine learning. </p>
                        <p className="internship">In my recent internship at ForUP LLC, I've researched topics like LLMs (Large Language Models), NLPs (Natural Language Processing),
                        and SEOs (Search Engine Optimization) and how they can be implemented in certain data solutions.</p>
                        <p className="outro">I am always on the lookout for internships or opportunities to grow both personally and professionally! Please feel free to reach out
                        to me at jsong04@berkeley.edu!</p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2 className="skillsHeader">Skills</h2>
                <hr className="skillsHeaderLine" />
                <div className="skillsBox">
                    <button className="java">
                        <div className="javaBox">
                            <FaJava className="javaIcon" />
                            <p className="javaText"> Java </p>
                        </div>
                    </button>
                    <button className="python">
                        <div className="pythonBox">
                            <FaPython className="pythonIcon"/>
                            <p className="pythonText"> Python </p>
                        </div>
                    </button>
                    <button className="html">
                        <div className="htmlBox">
                            <FaHtml5 className="htmlIcon" />
                            <p className="htmlText"> HTML </p>
                        </div>
                    </button>
                    <button className="css">
                        <div className="cssBox">
                            <FaCss3Alt className="cssIcon" />
                            <p className="cssText"> CSS </p>
                        </div>
                    </button>
                    <button className="javascript">
                        <div className="javascriptBox">
                            <BiLogoJavascript className="javascriptIcon" />
                            <p className="javascriptText"> Javascript </p>
                        </div>
                    </button>
                    <button className="react">
                        <div className="reactBox">
                            <FaReact className="reactIcon" />
                            <p className="reactText"> React </p>
                        </div>
                    </button>
                    <button className="tailwind">
                        <div className="tailwindBox">
                            <SiTailwindcss className="tailwindIcon" />
                            <p className="tailwindText"> Tailwind </p>
                        </div>
                    </button>
                    <button className="nodejs">
                        <div className="nodejsBox">
                            <FaNodeJs className="nodejsIcon" />
                            <p className="nodejsText"> Node.js </p>
                        </div>
                    </button>
                    <button className="sql">
                        <div className="sqlBox">
                            <PiFileSqlLight className="sqlIcon" />
                            <p className="sqlText"> SQL </p>
                        </div>
                    </button>
                    <button className="nextjs">
                        <div className="nextjsBox">
                            <TbBrandNextjs className="nextjsIcon" />
                            <p className="nextjsText"> Next.js </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
