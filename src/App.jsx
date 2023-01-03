import Home from '../src/Pages/Home/Home.jsx';
import { Route, Routes } from 'react-router';
import "./index.css";

function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;