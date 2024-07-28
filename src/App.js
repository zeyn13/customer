import logo from './logo.svg';
import './App.css';

//components
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/editUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/all' element={<AllUsers />} />
    <Route path='/add' element={<AddUser />} />
    <Route path='/edit/:id' element={<EditUser />} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
