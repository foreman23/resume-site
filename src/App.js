import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectInfo from './pages/ProjectInfo';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/:projectId' element={<ProjectInfo></ProjectInfo>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
