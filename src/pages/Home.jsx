import { ReactComponent as Github } from '../images/icons/icons8-github.svg';
import { ReactComponent as Insta } from '../images/icons/icons8-insta.svg';
import { ReactComponent as Tele } from '../images/icons/icons8-telegram.svg';
import { ReactComponent as Face } from '../images/icons/icons8-facebook.svg';
import { HomeData } from './HomeData';
import { motion } from 'framer-motion';
import  CountUp  from 'react-countup'

function Home() {
  return (
    <>
      <motion.div className="flex flex-col text-center lg:text-start gap-y-14 lg:gap-y-28 h-full" initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.5,duration:1.4,ease:"easeInOut"}}} >
          

            <div className='w-full justify-between flex flex-col items-center gap-y-6 lg:flex-row-reverse'>
            <motion.div className=' place-self-center lg:w-5/12' initial={{opacity:0}} animate={{opacity:1,transition:{delay:1,duration:1.4,ease:"easeIn"}}}>
              <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:1.4,duration:1.4,ease:"easeInOut"}}} className='w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute'>
              <img className="inner rounded-full p-1" src={require('../images/man.png')} alt="" />
              </motion.div>
              <motion.svg className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
              fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                <motion.circle  cx="253" cy="253" r="250" stroke="#41C9E2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                initial={{strokeDasharray:"24 10 0 0"}} animate={{strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],rotate:[120,360]}}
                transition={{
                  duration:20,
                  repeat:Infinity,
                  repeatType:'reverse'
                }} />
              </motion.svg>
            </motion.div>

            <div className='lg:w-1/2 flex flex-col gap-y-8'>
            
            <div className='flex flex-col gap-y-2'>
            <p className="text-lg">Front-end Developer</p>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-600 leading-tight ">
              Hello I'm<br />
              <span className="text-Secondary-fc">Melad Duraid</span>
            </h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
              I bring pixels to life with code, Crafting seamless experiences with creativity, Turning visions into engaging realities.
            </p>
            

            <div className="flex flex-col place-items-center gap-y-6 lg:flex-row gap-x-4 lg:justify-between">
            <button
                name='download cv'
                className="flex py-3 w-8/12 gap-3 rounded-full bg-bg-color text-Secondary-fc border border-Secondary-fc text-center justify-center items-center duration-200 hover:bg-Secondary-fc hover:text-main-fc ease-in-out"
              >
                <a href="meladCv.pdf" download="meladCv.pdf" className="flex items-center gap-3 w-full h-full justify-center">
                  DOWNLOAD CV 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </button>
              <div className='flex justify-around w-8/12 '>
                <button className="homeType"><a href="https://github.com/M3ed07"><Github /></a></button>
                <button className="homeType"><a href="https://www.instagram.com/m3elo7?igsh=dDlpN3pzdmxwYnNx&utm_source=qr"><Insta /></a></button>
                <button className="homeType"><a href="https://t.me/M3edo7"><Tele /></a></button>
                <button className="homeType"><a href="https://web.facebook.com/melad.medo.507027/"><Face /></a></button>
              </div>
            </div>

            </div>

            </div>

        <section className="flex flex-col gap-y-5 w-full place-items-center lg:flex-row">
          {HomeData.map((item, index) => (
            <div key={index} className="flex w-8/12 items-center gap-4">
              <CountUp end={item.Num} duration={4} delay={1.4} className=" text-4xl lg:text-5xl xl:text-6xl font-bold opacity-80"/>
              <h3 className="text-sm text-start md:text-base leading-relaxed lg:w-4/12 lg:leading-loose tracking-normal opacity-80">{item.title}</h3>
            </div>
          ))}
        </section>
      </motion.div>
    </>
  );
}

export default Home;
