function About() {
    return (
      <div className="flex flex-col gap-y-6 my-12 lg:my-0">
        <section className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl opacity-95">About me</h2>
        <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
        I'm Melad Duraid Daoud, a front-end web developer and UI/UX designer. I hold a bachelor’s degree from the University of Technology, graduating in the top 10 of my class. Specializing in Computer Science with a focus on the Multimedia branch, I'm passionate about creating seamless user experiences and visually captivating interfaces. Constantly driven by a thirst for learning and innovation, I'm dedicated to pushing boundaries and exploring new technologies. Beyond my professional pursuits, I enjoy staying abreast of industry trends and contributing to open-source projects.        </p>
        </section>
        <section className="flex lg:gap-x-0 gap-x-3 justify-between gap-y-5 mt-5 flex-wrap">
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Name</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">Melad Duraid</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Experience</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">2+ years</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Nationality</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">Iraqi</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Freelance</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">Available</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Phone</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">+964 773 622 9154</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Email</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">meladhero4@gmail.com</h2>
          </div>
          <div className="flex gap-4">
          <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">Languages</p>
          <h2 className="text-sm lg:text-md xl:text-lg opacity-95">Arabic , English</h2>
          </div>
        </section>
        
      </div>
    );
  }
  
  export default About;