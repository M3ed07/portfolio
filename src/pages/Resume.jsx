import { ResumeData } from "./ResumeData";
import { NavLink, Outlet } from 'react-router-dom';

function Resume({children}) {
    return (
      <div className="h-full text-center flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:text-start">
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
        <main className="lg:w-7/12">{children}<Outlet/></main>
      </div>
    );
}

export default Resume;
