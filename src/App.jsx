import Home from '../src/Pages/Home/Home.jsx';
import Project from './Pages/Projects/Projects.jsx';
import ProjectById from './Pages/Project/Project.jsx';
import { Route, Routes } from 'react-router';
import ScrollToTop from './scroller.js';
import { Toaster } from 'react-hot-toast';
import "./reset.css"
import "./index.css";

function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/projects/:id' element={<ProjectById />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;