import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
