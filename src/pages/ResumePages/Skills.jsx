import { SkillsData } from "../ResumeData";

function Skills() {
    return (
      <div className="flex flex-col gap-y-6 my-12 lg:my-0">
        <section className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl opacity-95">My skills</h2>
        <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
        This section highlights my expertise in web development and design, covering HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Firebase, and Figma. From crafting dynamic user interfaces to building interactive web applications, I bring a versatile skill set to every project.
        </p>
        </section>
        <section className="flex lg:gap-x-0 gap-x-3 justify-between gap-y-10 flex-wrap">
            {SkillsData.map((item,index)=>{
                return <div className=" hover:rotate-6 duration-300 flex flex-col py-4 px-8 gap-y-4 bg-main-fc bg-opacity-5 rounded-lg cursor-pointer lg:w-w23 w-5/12 " key={index}>
                    {item.logo}
                </div>
            })}
        </section>
      </div>
    );
  }
  
  export default Skills;