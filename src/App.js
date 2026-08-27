
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import './App.css';

import Home from './PAGES/Home';
import About from './PAGES/About';
import Courses from './PAGES/Courses';
import CoursesDetails from './PAGES/CourseDetails';
import Instructors from './PAGES/Instructors';
import InstructorDetails from './PAGES/InstructorDetails';
import Contact from './PAGES/Contact';
import NotFound from './PAGES/NotFound';

import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer';

import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (

   <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

   
    <Navbar />
    <div style={{flex:1}}>


    <p style={{textAlign:'center'}}>
      Current Path : {location.pathname}
    </p>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/courses' element={<Courses />} />
     <Route path='/instructors' element={<Instructors />} />
     <Route path='contact' element={<Contact />} />

     <Route path='/courses/:id' element={<CoursesDetails />} />
     <Route path='/instructors/:id' element={<InstructorDetails />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
    
    </div>
   <Footer />
   </div>
  );
}

export default App;
