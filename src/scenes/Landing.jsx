import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfilePicture from "../assets/ProfilePicture_auto_x2.jpg"
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10" >
            {/* Image */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                <motion.div
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                }}>
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ">
                            <img src={ProfilePicture} alt="profile-picture" className="z-10 w-fit h-[550px] max-w-[350px] md:max-w-[600px] rounded-full" />
                        </div>
                    ) : (
                        <img src={ProfilePicture} alt="profile picture" className="z-10 w-full max-w-[400px] md:max-w-[600] rounded-full" />
                    )}
                </motion.div>
        </div>

                {/* Main Section */}
                <div className="z-30 basis 2/5 mt-12 md:mt-32">
                    {/* Headings */}
                    <motion.div 
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start ">
                            Enifome {""} <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[30px] before:-top-[70px] before:z-[-1] ">Alalor</span>
                        </p>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Hello! I'm a passionate front-end web developer with a love for creating beautiful and interactive web experiences.
                        <br />
                        <br />
                        Explore my world of web development, where design meets code, and innovation knows no bounds. From crafting elegant user interfaces to bringing websites to life with seamless interactions, I'm here to showcase my journey.
                        </p>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                    >
                        <AnchorLink
                        className="rounded-sm bg-gradient-rainblue p-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                                Let's talk
                            </div>
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                    >
                        <SocialMediaIcons /> 
                    </motion.div>
                </div>
        </section>
    )
}

export default Landing;