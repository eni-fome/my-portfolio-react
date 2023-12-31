import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GithubLogo from "../assets/github-mark.png";
import Linkimg from "../assets/LinkPng.png";
import netflixClone from "../assets/NetflixClone.png";
import fitnessSite from "../assets/fitnesswebsite.png";
import taskTracker from "../assets/Task-Tracker.png";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link1, link2, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-4 md:p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl md:text-2xl font-playfair">{title}</p>
        <p className="mt-4 md:mt-7">
          {description}
        </p>
        <div className="flex justify-center items-center my-1 gap-3">
          <a
            className="hover:opacity-50 transition duration-500"
            href={link1}
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubLogo} alt="github-logo" />
          </a>
          <a
            className="hover:opacity-50 transition duration-500"
            href={link2}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkimg} alt="link-logo" />
          </a>
        </div>
      </div>
      <div className="w-64 h-64 md:w-[400px] md:h-[400px] relative">
        <img
          src={img}
          alt={projectTitle}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-12 md:pt-48 pb-12 md:pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl md:text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-3 md:mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-4 md:mt-10 mb-4 md:mb-10">
          Explore a collection of my web development endeavors that blend design, functionality, and innovation. Each project tells a unique story of creativity and technical prowess. From eye-catching websites to user-friendly web apps, dive into my world of digital craftsmanship. Join me on this journey of web development excellence.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className=" md:flex justify-center text-center items-center p-4 md:p-10 bg-red
              max-w-[257px] max-h-[150px] md:max-w-[400px] md:max-h-[400px] text-lg md:text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            className="max-w-[150px] max-h-[150px] md:max-w-[400px] md:max-h-[400px] object-cover"
            title="Task Tracker"
            description="A task tracker application meticulously crafted with React. This platform serves as a shining example of how my skills are applied to real-world scenarios in the realm of task management."
            img={taskTracker}
            link1={"https://github.com/eni-fome/React-task-tracker.git"}
            link2={"https://react-task-tracker-alpha-one.vercel.app/"}
          />

          <Project
            className="max-w-[150px] max-h-[150px] md:max-w-[400px] md:max-h-[400px] object-cover"
            title="Fitness Website"
            description="Experience Evogym to witness the culmination of technology and wellness, designed exclusively for women. This platform exemplifies the fusion of strength, skill, and real-world application."
            img={fitnessSite}
            link1={"https://github.com/eni-fome/react-gym-site.git"}
            link2={"https://react-gym-site-xb5r.vercel.app/"}
          />

          <Project
            className="max-w-[150px] max-h-[150px] md:max-w-[400px] md:max-h-[400px] object-cover"
            title="Netflix Clone"
            description="An expert recreation of the popular streaming website Netflix, showcasing my eye for detail and functionality and also the translation of my skills into real-world scenarios."
            img={netflixClone}
            link1={"https://github.com/eni-fome/Netflix-Landing-page.git"}
            link2={"https://netflix-landing-page-two.vercel.app/"}
          />

          <div
            className="md:flex justify-center text-center items-center p-4 md:p-10 bg-blue
              max-w-[257px] max-h-[150px] md:max-w-[400px] md:max-h-[400px] text-lg md:text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
