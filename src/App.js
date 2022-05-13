import './App.css';
import Header from './Component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import Login from './Component/Pages/Login/Login';
import Footer from './Component/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
