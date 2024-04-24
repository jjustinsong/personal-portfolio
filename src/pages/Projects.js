import React from 'react'

function Projects() {
    return (
        <div class="overflow-x-hidden overflow-y-hidden md:w-full md:h-[600px] font-montserrat flex flex-col md:flex-row animate-slideInFromTop items-center">
            <div class="m-[20px] md:m-0 w-[350px] h-[440px] relative md:left-[150px] md:top-[10px] bg-black border-solid border-black rounded-[20px] text-center hover:shadow-s hover:-translate-y-[0.75em] hover:bg-proj duration-300 hover:border-proj">
                <img class="w-[325px] h-[188px] border-solid border-proj border-[1px] rounded-[10px] mt-[12.5px] mb-[12.5px] m-auto" src={require("../assets/igdatascraper.png")} alt="IG Data Scraper"/>
                <h2 class="text-white font-montserrat text-[20px]">IG Data Scraper</h2>
                <p class="m-[12.5px] text-gray">Automated web browsing data scraper for Instagram. Pulls multiple profiles with their bio, title, follower count, individual post statistics, and more.</p>
                <p class="text-language text-[12px]">Python, Selenium</p>
                <a class="text-white text-[12px] underline" href='https://github.com/jjustinsong/igdatascraper' target='_blank' rel='noreferrer'>GitHub</a>
            </div>
            <div class="m-[20px] md:m-0 w-[350px] h-[440px] relative md:left-[190px] md:top-[10px] bg-black border-solid border-black rounded-[20px] text-center hover:shadow-s hover:-translate-y-[0.75em] hover:bg-proj duration-300 hover:border-proj">
                <img class="w-[325px] border-solid border-proj border-[1px] rounded-[10px] mt-[12.5px] mb-[12.5px] m-auto" src={require("../assets/flwr-man.jpg")} alt="FLWR-MAN"/>
                <h2 class="text-white font-montserrat text-[20px]">FLWR-MAN</h2>
                <p class="m-[12.5px] text-gray">Simple game with a 2D array-powered map and a movable/customizable character. Objective is to enter all portals and collect all the flowers.</p>
                <p class="text-language text-[12px]">Java</p>
                <a class="text-white text-[12px] underline" href='https://github.com/jjustinsong/flwr-man' target='_blank' rel='noreferrer'>GitHub</a>
            </div>
            <div class="m-[20px] md:m-0 w-[350px] h-[440px] relative md:left-[230px] md:top-[10px] bg-black border-solid border-black rounded-[20px]">
                <h2 class="text-white relative top-[150px]">SOON</h2>
            </div>
        </div>
    )
}

export default Projects

