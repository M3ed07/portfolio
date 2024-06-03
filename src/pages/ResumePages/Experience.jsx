import { ExperienceData } from "../ResumeData";
function Experience() {
    return (
      <div className="flex flex-col gap-y-6 my-12 lg:my-0">
        <section className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl opacity-95">My experience</h2>
        <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
        A fusion of frontend development and UI/UX design, navigating the digital landscape with innovation and precision.
        </p>
        </section>
        <section className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-y-10 flex-wrap">
            {ExperienceData.map((item,index)=>{
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
      </div>
    );
  }
  
  export default Experience;