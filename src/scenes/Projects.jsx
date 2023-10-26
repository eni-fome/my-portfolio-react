import LineGradient from "../components/LineGradient"
import {motion} from "framer-motion"
import GymApp from "../assets/Women's Gym Website (1).png"
import NetflixClone from "../assets/Netflix Clone.png"
import TaskTracker from "../assets/Task Tracker with React.png"
import GithubLogo from "../assets/github-mark-white.png"
import twitterLogo from "../assets/logo-white.png"


const container = {
    hidden: {},
    visible: {
        staggerChildren: 0.2
    }
}

const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

{/* 
const Project = ({title, description}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 flex flex-col bg-grey z-30 justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">{description}</p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt="project-img" />
        </motion.div>
    )
}
*/}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
        {/* Headings */}
        <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
        }}>
            <div>
                <p className='font-playfair font-semibold text-4xl '>
                    MY <span className='text-red'>PRO</span>JECTS
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width='w-1/3' />
                </div>
            </div>
            <p className='mt-10 mb-10'>
            Explore a collection of my web development endeavors that blend design, functionality, and innovation. Each project tells a unique story of creativity and technical prowess. From eye-catching websites to user-friendly web apps, dive into my world of digital craftsmanship. Join me on this journey of web development excellence.
            </p>
        </motion.div>
        {/*  projects */}
        <div className="justify-center flex">
            <motion.div
            className="sm:grid sm:grid-cols-3 gap-3"
            initial= "hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}>

                {/* row 1 */}
                {/* <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                    BEAUTIFUL USER INTERFACES
                </div> */}
                {/* <Project title="React Gym app" description="A gym app" />
                <Project title="project 2" /> */}
                <div className="bg-opaque-black rounded-[20px]">
                    {/* Project Image */}
                    <div >
                        <img src={NetflixClone} alt="netflix-clone" />
                    </div>
                    <div>
                        {/* Description */}
                        <p className="text-2xl font-playfair font-semibold text-red px-2 py-3">Netflix Clone</p>
                        <p className="px-2">
                        Experience Evogym to witness the culmination of technology and wellness, designed exclusively for women. Whether you seek fitness inspiration, potential collaboration, or embark on your fitness journey, this platform exemplifies the fusion of strength, skill, and real-world application.
                        </p>
                    </div>
                    <div>
                        {/* Links */}
                        <div className="flex justify-center md:justify-start my-10 gap-7 mx-10" >
                                <a className="hover:opacity-50 transition duration-500"
                                href="https://github.com/eni-fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={GithubLogo} alt="github-logo" />
                                </a>

                                <a className="hover:opacity-50 transition duration-500"
                                href="https://twitter.com/eni_fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={twitterLogo} alt="twitter-logo" />
                                </a>
                        </div>
                    </div>
                </div>


                <div className="bg-opaque-black rounded-[20px]">
                    {/* Project Image */}
                    <div >
                        <img src={GymApp} alt="Gym Website" />
                    </div>
                    <div>
                        {/* Description */}
                        <p className="text-2xl font-playfair font-semibold text-red px-2 py-3">Evogym</p>
                        <p className="px-2">
                        Experience Evogym to witness the culmination of technology and wellness, designed exclusively for women. Whether you seek fitness inspiration, potential collaboration, or embark on your fitness journey, this platform exemplifies the fusion of strength, skill, and real-world application.
                        </p>
                    </div>
                    <div>
                        {/* Links */}
                        <div className="flex justify-center md:justify-start my-10 gap-7 mx-10" >
                                <a className="hover:opacity-50 transition duration-500"
                                href="https://github.com/eni-fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={GithubLogo} alt="github-logo" />
                                </a>

                                <a className="hover:opacity-50 transition duration-500"
                                href="https://twitter.com/eni_fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={twitterLogo} alt="twitter-logo" />
                                </a>
                        </div>
                    </div>
                </div>


                <div className="bg-opaque-black rounded-[20px]">
                    {/* Project Image */}
                    <div >
                        <img src={TaskTracker} alt="Task-tracker" />
                    </div>
                    <div>
                        {/* Description */}
                        <p className="text-2xl font-playfair font-semibold text-red px-2 py-3">Task Tracker</p>
                        <p className="px-2">
                        Experience Evogym to witness the culmination of technology and wellness, designed exclusively for women. Whether you seek fitness inspiration, potential collaboration, or embark on your fitness journey, this platform exemplifies the fusion of strength, skill, and real-world application.
                        </p>
                    </div>
                    <div>
                        {/* Links */}
                        <div className="flex justify-center md:justify-start my-10 gap-7 mx-10" >
                                <a className="hover:opacity-50 transition duration-500"
                                href="https://github.com/eni-fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={GithubLogo} alt="github-logo" />
                                </a>

                                <a className="hover:opacity-50 transition duration-500"
                                href="https://twitter.com/eni_fome"
                                target="_blank"
                                rel="noreferrer">
                                    <img src={twitterLogo} alt="twitter-logo" />
                                </a>
                        </div>
                    </div>
                </div>

                {/* Row 2
                <Project title="project 3" /> */}


                {/* <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                    SMOOTH USER EXPERIENCE
                </div> */}
            </motion.div>
        </div>
    </section>
  )
}

export default Projects
