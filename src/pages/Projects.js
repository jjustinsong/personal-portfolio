import React, {useState, useEffect} from 'react'

function Container({name, description, languages, link, image}) {
    return (
        <>
            <div class="m-[20px] w-[350px] h-[440px] md:mt-[30px] relative bg-black border-solid border-black rounded-[20px] text-center hover:shadow-s hover:-translate-y-[0.75em] hover:bg-proj duration-300 hover:border-proj">
                    <img class="w-[325px] h-[188px] border-solid border-proj border-[1px] rounded-[10px] mt-[12.5px] mb-[12.5px] m-auto" src={image} alt={name}/>
                    <h2 class="text-white font-montserrat text-[20px]">{name}</h2>
                    <p class="m-[12.5px] text-gray">{description}</p>
                    <p class="text-language text-[12px]">{languages}</p>
                    <a class="text-white text-[12px] underline" href={link} target='_blank' rel='noreferrer'>GitHub</a>
            </div>
        </>
    )
}

function Projects() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const divStyle = {
        height: `calc(100% + ${windowSize < 768 ? '200px' : '-186px'})`
    }

    return (
        <div style={divStyle} class="overflow-x-hidden md:w-full font-montserrat flex flex-col md:flex-row animate-slideInFromTop items-center md:items-flex-start justify-center">
            <Container 
                name='Email Classifier' 
                description='Full-stack application for email spam classification. Input email subject and body to determine whether or not it is spam.'
                languages='Python, Flask, React, HTML/CSS, Tailwind'
                link='https://github.com/jjustinsong/email-spam-predictor'
                image={require('../assets/email-classifier.png')}
            />
            <Container 
                name='IG Data Scraper' 
                description='Automated web browsing data scraper for Instagram. Pulls multiple profiles with their bio, title, follower count, individual post statistics, and more.'
                languages='Python, Selenium'
                link='https://github.com/jjustinsong/igdatascraper'
                image={require('../assets/igdatascraper.png')}
            />
            <Container 
                name='FLWR-MAN'
                description='Simple game with a 2D array-powered map and a movable/customizable character. Objective is to enter all portals and collect all the flowers.'
                languages='Java'
                link='https://github.com/jjustinsong/flwr-man'
                image={require('../assets/flwr-man.jpg')}
            />
        </div>
    )
}

export default Projects

