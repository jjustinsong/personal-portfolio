import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {

    return (
        <div style={{height: 'calc(100% - 186px)'}} class="overflow-x-hidden overflow-y-hidden w-full flex items-center justify-center flex-col md:flex-row font-montserrat">
            <div class="md:h-full flex flex-col justify-center md:text-left m-50px md:m-0">
                <p class="text-gray font-bold relative text-[20px] 2xl:text-[25px]">Hello World! I'm</p>
                <h2 class="text-[30px] animate-slideInFromLeft text-white font-worksans md:text-[60px] 2xl:text-[70px] relative">Justin Song</h2>
                <div class="text-center min-w-[200px] md:text-left font-bold font-montserrat text-gray text-[20px] 2xl:text-[25px] relative top-[0px]">
                    <Typewriter 
                        options={{loop: true}}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Full-Stack Developer").pauseFor(2000).deleteAll()
                            .typeString("Innovator").pauseFor(2000).deleteAll()
                            .typeString("ML Engineer").pauseFor(2000).deleteAll()
                            .typeString("Student").pauseFor(2000).deleteAll()
                            .start();
                        }}
                    />
                </div>
            </div>
            {/*<div class="flex w-full md:w-5/11 items-center justify-center md:justify-normal">
                <img class="w-[50%] md:text-left md:block animate-slideInFromRight md:w-[60%] rounded-[20px] border-solid border-gray border-4" src={require("../assets/me (1).jpg")} alt="Headshot"/>
            </div>*/}
        </div>
    )
}

export default Home
