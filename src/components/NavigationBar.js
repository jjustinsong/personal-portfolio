import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "../styles/NavigationBar.css"
import ReorderIcon from '@material-ui/icons/Reorder';

function NavigationBar() {
    const [expandNavigationBar, setExpandNavigationBar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavigationBar(false)
    }, [location])

    const onButtonClick = () => {
        fetch("Justin Song - SWE.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Justin Song - SWE Resume 6.pdf";
                alink.click();
            });
        });
    }
    return (
        <html>
            <body>
                <div className="navigationBar" id={expandNavigationBar ? "open" : "close"}>
                    <div className="toggleButton">
                        <button
                            onClick={() => {
                                setExpandNavigationBar((prev) => !prev);
                            }}
                        >
                            <ReorderIcon />
                        </button>
                    </div>
                    <div className="header">
                        <div className="logo">justinSong();</div>
                        <div className="links">
                            <NavLink to="/" activeClassName="selected"> Home </NavLink>
                            <NavLink to="/about" activeClassName="selected"> About </NavLink>
                            <NavLink to="/projects" activeClassName="selected"> Projects </NavLink>
                            <button className="resume" onClick={onButtonClick}>Resume</button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default NavigationBar
