import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGradient"
import MySkills from "./scenes/Myskills"
import Projects from "./scenes/Projects"
import Frameworks from "./scenes/Frameworks"
import Contact from "./scenes/Contact";


function App() {
    const [selectedPage, setSelectedPage] = useState("home");
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [isTopOfPage, setIsTopOfPage] = useState("true")

    useEffect(() => {
        const handleScroll =() => {
            if(window.scrollY === 0) setIsTopOfPage(true);
            else setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <div className="app bg-deep-blue">
        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
    />
        <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens && (
                <DotGroup 
                setSelectedPage={setSelectedPage} 
                selectedPage={selectedPage} />
            )}
            < Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
            <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
            <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
            <Frameworks />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
            <Contact />
        </div>
    </div>)
}

export default App;
