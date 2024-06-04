import './App.css';
import Navbar from './nav/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experience from './pages/ResumePages/Experience';
import Education from './pages/ResumePages/Education';
import Skills from './pages/ResumePages/Skills';
import About from './pages/ResumePages/About';
function App() {
  return (
    <div className="text-main-fc bg-bg-color w-full min-h-screen h-full flex justify-center">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="resume" element={<Resume/>}>
            <Route path="experience" element={<Experience/>}/>
            <Route path="educations" element={<Education/>}/>
            <Route path="skills" element={<Skills/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
          <Route path="work" element={<Work/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;