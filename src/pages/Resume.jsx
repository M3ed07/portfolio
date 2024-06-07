import { ResumeData } from "./ResumeData";
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
function Resume({children}) {
    return (
      <motion.div className="h-full text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:text-start" initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:1.4,ease:"easeInOut"}}}>
        <section className="lg:w-4/12 flex flex-col gap-y-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Why hire me?</h1>
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
            Turning ideas into reality, I'm your go-to expert.
            Designing with purpose, here's why you should hire
            me for your next project.
          </p>
          <div className="flex flex-col gap-y-6">
            {ResumeData.map((item, index) => (
              <NavLink to={item.path} key={index} className="ResumeBtn">
                {item.title}
              </NavLink>
            ))}
          </div>
        </section>
        <motion.main initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:1.4,ease:"easeInOut"}}} className="lg:w-7/12">{children}<Outlet/></motion.main>
      </motion.div>
    );
}

export default Resume;
