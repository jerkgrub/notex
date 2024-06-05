import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetAllNote from './FullNote/GetAllNote';
import GetOneNote from './FullNote/GetOneNote';
import NoteTakingPage from './FullNote/NoteTakingPage';
import NavBar from './FullNote/NavBar';
import './App.css';


function App() {
  return (
    <div className="App">

             <BrowserRouter>
             <NavBar/> 
                <Routes>

                  <Route path='/note/new' element={<NoteTakingPage/>}></Route>
                  <Route path='/note/all' element={<GetAllNote/>}></Route>
                  <Route path='/note/:ntitlex' element={<GetOneNote/>}></Route>
                  
                </Routes>
             </BrowserRouter>
    </div>
  );
}

export default App;
