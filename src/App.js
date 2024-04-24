import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <Routes>
        <Route path={'/'} element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
