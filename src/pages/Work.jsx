import { ReactComponent as Github } from '../images/icons/icons8-github.svg';
import { WorkData } from './WorkData';
import React, { useState } from 'react';

function Work() {
    const [status, setStatus] = useState(WorkData[0].id);

    const handleNext = () => {
        const currentIndex = WorkData.findIndex(item => item.id === status);
        const nextIndex = (currentIndex + 1) % WorkData.length;
        setStatus(WorkData[nextIndex].id);
    };

    const handlePrev = () => {
        const currentIndex = WorkData.findIndex(item => item.id === status);
        const prevIndex = (currentIndex - 1 + WorkData.length) % WorkData.length;
        setStatus(WorkData[prevIndex].id);
    };

    return (
        <div>
            {WorkData.map((item, index) => (
                status === item.id && (
                    <div key={index} className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 lg:gap-0">
                        <section className="flex flex-col text-center lg:text-start lg:w-47 gap-6 lg:gap-7">
                            <h1 className="text-7xl font-bold leading-tight">{item.id}</h1>
                            <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl opacity-95">{item.title}</h2>
                            <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
                             {item.para}
                            </p>
                            <h4 className="text-sm md:text-base text-Secondary-fc">{item.progLang}</h4>
                            <span className="w-full h-px bg-white bg-opacity-50"></span>
                            <button className='text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80'>
                                <a className=' underline flex lg:w-1/2 gap-x-4 justify-center lg:justify-start center items-center' href={item.githubAc}>
                                    <Github /> Github source code
                                </a>
                            </button>
                        </section>
                        <section className="flex flex-col lg:w-47 relative">
                            {item.image}
                            <div className="flex place-items-center h-full w-full absolute lg:relative">
                                <div className='flex justify-between w-full gap-x-2 lg:place-content-end lg:mt-4'>
                                <button onClick={handlePrev} className="p-3 bg-Secondary-fc duration-200 hover:opacity-85">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="size-6 text-bg-color">
                                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" /></svg>
                                </button>
                                <button onClick={handleNext} className="p-3 bg-Secondary-fc duration-200 hover:opacity-85">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="size-6 text-bg-color">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" /></svg>
                                </button>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            ))}
        </div>
    );
}

export default Work;
