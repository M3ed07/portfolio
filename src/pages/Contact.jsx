import { ContactData } from "./ResumeData";
import React,{useState} from 'react';
function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    
    const response = await fetch('https://formsubmit.co/ajax/meladhero4@gmail.com', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
      setIsButtonDisabled(false);
    }
  };

    return (
      <div className="flex flex-col-reverse gap-16 mb-8 lg:flex-row lg:items-center justify-between">
        <section className="lg:w-w60 h-3/4 p-10 flex flex-col gap-8 shadow-inner rounded-lg bg-main-fc bg-opacity-5">
          <div className="flex flex-col gap-y-6 text-center lg:text-start">
            <h2 className=" text-Secondary-fc text-2xl lg:text-3xl xl:text-4xl opacity-95">Let's work together</h2>
            <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">
              Send me your information if you are interested in working with me.
              fill out the form.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap justify-between gap-y-8">
            <input className="inputTag" type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
            <input className="inputTag" type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
            <input className="inputTag" type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
            <input className="inputTag" type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
            <select name="service" className="inputTag w-full" value={formData.service} onChange={handleChange}>
              <option value="Web Development">Web Development</option>
              <option value="Ui/Ux design">Ui/Ux design</option>
            </select>
            <textarea className="inputTag w-full lg:h-52 h-36" name="message" placeholder="Type your message here ..." value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" disabled={isButtonDisabled} className="text-sm h-9 w-1/2 lg:text-base lg:w-1/3 lg:h-11 rounded-full duration-200 bg-Secondary-fc text-bg-color hover:bg-bg-color hover:text-Secondary-fc hover:border hover:border-Secondary-fc">Send message</button>
          </form>
        </section>
        <section className="flex flex-col gap-10 text-start">
        {ContactData.map((item,index)=>{
          return <div className="flex gap-4" key={index}>
            <div className=" w-16 h-16 rounded-md justify-center items-center flex text-Secondary-fc bg-main-fc bg-opacity-5">
              {item.logo}
            </div>
            <div className="flex flex-col justify-around">
            <p className="text-sm md:text-base leading-relaxed lg:leading-loose tracking-normal opacity-80">{item.title}</p>
            <h3 className="text-sm lg:text-md xl:text-lg opacity-95">{item.val}</h3>
            </div>
          </div>
        })}
        </section>
      </div>
    );
  }
  
  export default Contact;