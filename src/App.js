import './App.css';
import Header from './Component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import Login from './Component/Pages/Login/Login';
import AppointmentPage from './Component/Pages/AppointmentPage/AppointmentPage.';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className='App max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='appointment' element={<AppointmentPage></AppointmentPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
