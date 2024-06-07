import { EducationData } from "../ResumeData";
import { motion } from 'framer-motion';
function Education() {
    return (
      <motion.div className="flex flex-col gap-y-6 my-12 lg:my-0" initial={{opacity:0}} animate={{opacity:1,transition:{duration:1,ease:"easeInOut"}}}>
      <section className="flex flex-col gap-y-6">
      <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl opacity-95">My education</h2>
      <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
      My education has been fundamental in shaping my knowledge and skills. This section outlines the key institutions, degrees, and training that have prepared me for my professional journey.
      </p>
      </section>
      <section className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-10 flex-wrap">
          {EducationData.map((item,index)=>{
              return <div className=" flex flex-col place-content-center py-4 px-8 gap-y-4 bg-main-fc bg-opacity-5 rounded-lg w-full lg:w-47 h-36 lg:h-44" key={index}>
                  <p className="text-sm md:text-base text-start text-Secondary-fc">{item.date}</p>
                  <h3 className=" text-md text-start lg:text-lg xl:text-xl">{item.title}</h3>
                  <div className="flex items-center gap-3">
                  <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-Secondary-fc"></div>
                  <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-70">{item.place}</p>
                  </div>
              </div>
          })}
      </section>
    </motion.div>
    );
  }
  
  export default Education;