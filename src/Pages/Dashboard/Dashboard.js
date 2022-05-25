import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className='text-2xl font-bold text center text-cyan-600'>Welcome Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;