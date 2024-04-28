import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_dash from './components/Admin_dash';
import Student from './components/Student';

function App() {
  return (
    <div>
     <Routes>
        <Route path={'/'} element={<Home/>}></Route>
       <Route path={'/addash'} element={<Admin_dash/>}></Route>
        <Route path={'/list'}  element={<Student/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
