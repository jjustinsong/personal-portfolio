import React from 'react';
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
        <div class="overflow-x-hidden overflow-y-hidden w-full h-[800px] font-montserrat flex flex-col">
            <div class="flex flex-col">
                <h2 class="text-white mb-[5px] pt-[20px] relative -left-[173px] md:-left-[575px] font-bold text-[20px] animate-slideInFromLeft">About me</h2>   
                <hr class="w-[87%] m-auto bg-gray h-[1px] border-none mt-0" />
                <div class="flex flex-col md:flex-row items-center md:items-stretch">
                    <img class="hidden md:inline w-1/4 rounded-[300px] relative left-[140px] top-[40px] border-solid border-gray border-[5px] animate-slideInFromLeft" src={require("../assets/berkeleycampus.jpeg")} alt="Berkeley"/>
                    <div class="flex flex-col animate-slideInFromRight w-[85%] md:w-full">
                        <p class="text-[13px] md:text-[16px] text-white leading-loose text-left m-[10px] md:m-0 md:w-[700px] relative md:left-[230px] md:top-[80px]">Hi! I'm Justin Song, a current student at UC Berkeley studying computer science and data science. I'm extremely interested in
                        full-stack development and AI/ML. </p>
                        <p class="text-[13px] md:text-[16px] text-white leading-loose text-left m-[10px] md:m-0 md:w-[700px] relative md:left-[230px] md:top-[95px]">Currently, I'm working as a Full-Stack Developer and AI/ML Intern at Hyphenova Network. My work mainly consists of database integration
                        and management, as well as fine-tuning models for sentiment analysis.</p>
                        <p class="text-[13px] md:text-[16px] text-white leading-loose text-left m-[10px] md:m-0 md:w-[700px] relative md:left-[230px] md:top-[110px]">I am always on the lookout for internships or opportunities to grow both personally and professionally! Please feel free to reach out
                        to me at jsong04@berkeley.edu!</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-full font-montserrat flex flex-col mt-[30px]">
                <h2 class="text-white pt-[20px] mb-[5px] relative -left-[200px] md:-left-[600px] md:top-[60px] text-[20px] font-bold animate-slideInFromLeft">Skills</h2>
                <hr class="w-[87%] m-auto bg-gray h-[1px] border-none mt-0 relative md:top-[60px]" />
                <div class="flex flex-row justify-evenly -top-[50px] md:w-[1150px] items-center flex-wrap relative md:-top-[30px] md:left-[150px] animate-slideInFromRight">
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaJava class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> Java </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaPython class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> Python </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaHtml5 class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> HTML </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaCss3Alt class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> CSS </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <BiLogoJavascript class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> JavaScript </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaReact class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> React </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <SiTailwindcss class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> Tailwind </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <FaNodeJs class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> Node.js </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <PiFileSqlLight class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> SQL </p>
                        </div>
                    </button>
                    <button class="bg-transparent w-[140px] h-[52px] md:w-[200px] md:h-[75px] mt-[20px] border-solid border-white border-[1.5px] duration-300 hover:bg-white hover:shadow-s hover:-translate-y-[0.25em] group">
                        <div class="flex flex-row justify-evenly items-center">
                            <TbBrandNextjs class="text-[30px] md:text-[50px] text-white group-hover:text-black" />
                            <p class="text-white font-montserrat text-[18px] md:text-[20px] group-hover:text-black"> Next.js </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
