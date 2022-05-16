import './App.css';
import Header from './Component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import Login from './Component/Pages/Login/Login';
import AppointmentPage from './Component/Pages/AppointmentPage/AppointmentPage.';
import 'react-day-picker/dist/style.css';
import { useEffect } from 'react';
import Signup from './Component/Pages/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import PrivateAuth from './Component/Shared/PrivateAuth/PrivateAuth';

function App() {
  useEffect(() => {
    const htmlTag = document.getElementById("html")
    htmlTag.setAttribute("data-theme","light")
  },[])
  return (
    <div className='App max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='appointment' element={<PrivateAuth>
          <AppointmentPage></AppointmentPage>
        </PrivateAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
