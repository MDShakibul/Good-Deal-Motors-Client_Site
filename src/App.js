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
import MoreProducts from './Pages/Home/MoreProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AllUsers from './Pages/Dashboard/AllUsers';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';

import RequireAdmin from './Pages/Login/RequireAdmin';
import NotFound from './Shared/NotFound';

function App() {
  
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path='/dashboard' element={
           <RequireAuth> 
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
           <Route index element={<MyOrders></MyOrders>}></Route>
           <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
           <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
           <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
           <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
           <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>

          
        </Route>
        <Route path="/more_products" element={<MoreProducts />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/purchase/:id" element={
          <RequireAuth> <Purchases /></RequireAuth>}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
