import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import "./app.scss";
import "./global.scss"

import {useState, useRef, useEffect } from "react";

const App = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [passedIntro, setPassedIntro] = useState(false)

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const clientHeight = document.getElementById('intro').clientHeight;

            if (window.scrollY >= clientHeight/1.5) {
                setPassedIntro(true);
            } else {
                setPassedIntro(false);
            }
        });

    });

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (!document.getElementsByClassName("topbar")[0].contains(event.target) && !document.getElementsByClassName("menu")[0].contains(event.target) ) {
                    setMenuOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const menuRef = useRef(null);
    useOutsideAlerter(menuRef);

    return (<div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} passedIntro={passedIntro} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Menu innerRef={menuRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro />
            <Portfolio darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </div>
        <Footer />
    </div>);
}

export default App;