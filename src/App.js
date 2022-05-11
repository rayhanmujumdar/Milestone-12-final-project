import './App.css';
import Header from './Component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import { useEffect, useState } from 'react';
import Login from './Component/Pages/Login/Login';

function App() {
  // document.body = 
  const [theme,setTheme] = useState(false) 
  useEffect(() => {
    document.getElementById('html').setAttribute('data-theme','light')
  },[theme])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
