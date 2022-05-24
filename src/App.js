import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import Purchases from './Pages/Home/Purchases';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={
          /* <RequireAuth> */
          <Home />
          /* </RequireAuth> */
        } />
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/purchase/:id" element={<Purchases />}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
