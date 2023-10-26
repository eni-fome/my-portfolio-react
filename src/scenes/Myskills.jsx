import LineGradient from '../components/LineGradient';
import useMediaQuery from "../hooks/useMediaQuery"
import {motion} from "framer-motion"
import skillImg from "../assets/skills-image.png"

const Myskills = () => {
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* Header and image sections */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
        className="md:w-1/3"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
        }}>
            <p className='font-playfair font-semibold text-4xl mb-5'>
                MY <span className='text-red'>SKILLS</span>
            </p>
            <LineGradient width='w-1/3' />
            <p className='mt-10 mb-7'>
            With a blend of creativity, code, and a dash of innovation, I breathe life into designs, crafting websites and web applications that not only look stunning but also function seamlessly.Let's dive into what I do best, where artistry meets technology, and user-centric web solutions come to life.
            </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
            {isAboveMediumScreens ? (
                <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
                    <img className='z-10' src={skillImg} alt="skills" />
                </div>
            ) : (
                <img className='z-10' src={skillImg} alt="skills" />
            )}
        </div>
    </div>

    {/* Skills */}
    <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* Design */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>01</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'>Creative Prowess</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'>With a keen eye for aesthetics, I create visually stunning designs that captivate and engage users.</p>
        </motion.div>

        {/* Development */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.4, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>02</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'> Development</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'>Turning designs into reality, I specialize in crafting clean, responsive, and accessible web applications. and engage users.</p>
        </motion.div>

        {/* Optimization */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ delay:0.6, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>03</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'> Optimization</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'> I'm all about performance! I optimize websites to load faster, ensuring a smooth user experience..</p>
        </motion.div>
        {/* Second row */}
    </div>
    <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* Problem Solving */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ delay:0.8, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>04</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'> Problem Solving</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-gray absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'> Every project is a puzzle, and I love solving it. From fixing bugs to implementing new features, I'm always up for a challenge.</p>
        </motion.div>
        {/*  Continuous Learning */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ delay: 1.0, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>05</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'>  Continuous Learning</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'>  I'm dedicated to lifelong learning, keeping up with evolving web technologies and design trends.</p>
        </motion.div>
        {/*  Collaboration */}
        <motion.div
        className="md:w-1/3 mt-10"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ delay: 1.02, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                    <p className='font-playfair font-semibold text-5xl'>06</p>
                    <p className='font-playfair font-semibold text-3xl mt-3'>  Collaboration</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-orange absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'> I thrive in cross-functional teams, working closely with designers, developers, and stakeholders to deliver exceptional projects.</p>
        </motion.div>
    </div>
</section>
  )
}

export default Myskills;
