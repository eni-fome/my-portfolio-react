import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion"
import Laptop from "../assets/frameworks.jpg"
import codingMan from "../assets/languages.jpeg"
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
                    <p  className="font-playfair font-semibold text-3xl md:text-4xl mb-5">
                        FRAMEWORKS & <span className='text-red'>LANGUAGES</span>
                    </p>
                    <LineGradient width="w-1/4"/>
                </motion.div>

                <div className='mt-16 md:mt-0'>
            {isAboveMediumScreens ? ("") : (
                <img className='z-10 object-cover justify-center w-full h-32 mt-10' src={Laptop} alt="laptop" />
            )}
        </div>
    </div>

    {/* Frameworks and Image */}
    <div className="md:flex md:justify-between">
        <div className="mt-10">
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
                <ul className='font-playfair font-medium text-5xl '>
                    <li className="flex items-center mb-5 gap-3 text-blue"> <FaReact /> <span className="text-white text-2xl">React</span></li>
                    <li className="flex items-center mb-5 gap-3 text-green"> <FaVuejs /> <span  className="text-white text-2xl">Vue</span></li>
                    <li className="flex items-center mb-5 gap-3 text-red"> <FaAngular /> <span  className="text-white text-2xl">Angular</span></li>
                    <li className="flex items-center mb-5 gap-3 text-dark-grey"> <BiLogoTailwindCss /> <span  className="text-white text-2xl">Tailwind CSS</span></li>
                    <li className="flex items-center mb-5 gap-3 text-orange"> <FaHtml5 /><span className="text-white text-2xl">HTML 5</span></li>
                    <li className="flex items-center mb-5 gap-3 text-blue"> <FaCss3Alt /> <span  className="text-white text-2xl">CSS 3</span></li>
                    <li className="flex items-center mb-5 gap-3 text-orange"> <BiLogoJavascript /><span className="text-white text-2xl">Javascript ES6</span> </li>
                    <li className="flex items-center mb-5 gap-3 text-blue"> <BiLogoTypescript /><span className="text-white text-2xl"> Typescript</span></li>
                    <li className="flex items-center mb-5 gap-3 opaque-black"> <FaWordpress /> <span className="text-red"><FaElementor /></span> <span className="text-white text-2xl">Wordpress with Elementor</span></li>
                    <li className="flex items-center gap-3 opaque-black"> <SiCanva /><span className="text-white text-2xl">Canva Design</span></li>
                </ul>
            </motion.div>
        </div>
        <div>
        {isAboveMediumScreens ? (
                <div className= "">
                    <img className="object-cover justify-center w-11/12 h-full mt-20 rounded-3xl" src={codingMan} alt="codingMan" />
                </div>
            ) : (
                ""
            )}
    </div>
    </div>
    </section>
    )
}

export default Frameworks
