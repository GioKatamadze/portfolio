import Home from '../src/Pages/Home/Home.jsx';
import Project from './Pages/Projects/Projects.jsx';
import { Route, Routes } from 'react-router';
import "./reset.css"
import "./index.css";

function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;