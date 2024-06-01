import './App.css';
import Navbar from './nav/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="text-main-fc bg-bg-color w-full h-screen flex justify-center">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path="home" element={<Home/>}></Route>
          <Route path="services" element={<Services/>}></Route>
          <Route path="resume" element={<Resume/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
