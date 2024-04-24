import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {

    return (
        <html>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Kanit&family=Montserrat&family=Work+Sans&display=swap');
                </style>
            </head>
            <body>
                <div class="overflow-x-hidden overflow-y-hidden w-full h-[600px] md:h-[500px] flex flex-col md:flex-row font-montserrat">
                    <div class="md:w-full md:h-full inline-block flex-col justify-center text-center m-50px">
                        <p class="text-gray font-bold relative text-[20px] md:top-[135px] md:-left-[6.5px]">Hello World! I'm</p>
                        <h2 class="text-[30px] animate-slideInFromLeft h-100px text-white font-worksans md:text-[65px] relative md:left-100px md:top-[115px]">Justin Song</h2>
                        <div class="text-center min-w-[200px] md:text-left font-bold font-montserrat text-gray text-[20px] relative -top-[55px] md:left-249px md:top-[95px]">
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
                    <div class="inline-block w-full justify-center text-center">
                        <img class="left-[135px] w-[50%] md:flex animate-slideInFromRight md:w-[65%] md:left-0 rounded-[500px] border-solid border-gray border-4 relative md:top-[45px]" src={require("../assets/headshot.jpg")} alt="Headshot"/>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default Home
