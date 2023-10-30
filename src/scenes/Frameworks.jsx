import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion"
import Laptop from "../assets/frameworks.jpg"
import { FaReact } from "react-icons/fa"
import {FaVuejs} from "react-icons/fa"
import {FaAngular} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {FaHtml5} from "react-icons/fa"
import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoTypescript} from "react-icons/bi"
import {BiLogoTailwindCss} from "react-icons/bi"
import {FaWordpress} from "react-icons/fa"
import {SiCanva} from "react-icons/si"
import {FaElementor} from "react-icons/fa"



const Frameworks = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id='frameworks' className='pt-10 pb-24'>
            <div>
                <motion.div
                className="justify-center items-center"
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}>
                    <p className='font-playfair font-semibold xs:font-medium  text-[50px] xs:text-[30px] mb-5 justify-center'>
                        FRAMEWORKS & <span className='text-red'>LANGUAGES</span>
                    </p>
                    <LineGradient width="w-1/4"/>
                </motion.div>

                <div className='mt-16 md:mt-0'>
            {isAboveMediumScreens ? (
                <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]' >
                    <img className="object-cover justify-center w-full h-32 mt-20 relative" src={Laptop} alt="skills" />
                </div>
            ) : (
                <img className='z-10' src={Laptop} alt="laptop" />
            )}
        </div>
    </div>

    {/* Frameworks */}
    <motion.div
    className="mt-10"
    initial= "hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    transition={{ duration: 0.5}}
    variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0}
    }}>
        <ul className='font-playfair font-semibold text-4xl '>
            <li className="flex items-center mb-5 gap-3 text-blue"> <FaReact /> <span className="text-white">React</span></li>
            <li className="flex items-center mb-5 gap-3 text-green"> <FaVuejs /> <span  className="text-white">Vue</span></li>
            <li className="flex items-center mb-5 gap-3 text-red"> <FaAngular /> <span  className="text-white">Angular</span></li>
            <li className="flex items-center mb-5 gap-3 text-dark-grey"> <BiLogoTailwindCss /> <span  className="text-white">Tailwind CSS</span></li>
            <li className="flex items-center mb-5 gap-3 text-orange"> <FaHtml5 /><span className="text-white">HTML 5</span></li>
            <li className="flex items-center mb-5 gap-3 text-blue"> <FaCss3Alt /> <span  className="text-white">CSS 3</span></li>
            <li className="flex items-center mb-5 gap-3 text-orange"> <BiLogoJavascript /><span className="text-white">Javascript ES6</span> </li>
            <li className="flex items-center mb-5 gap-3 text-blue"> <BiLogoTypescript /><span className="text-white"> Typescript</span></li>
            <li className="flex items-center mb-5 gap-3 opaque-black"> <FaWordpress /> <span className="text-red"><FaElementor /></span> <span className="text-white">Wordpress with Elementor</span></li>
            <li className="flex items-center gap-3 opaque-black"> <SiCanva /><span className="text-white">Canva Design</span></li>
        </ul>
    </motion.div>
        </section>
    )
}

export default Frameworks
