import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="footer p-10 bg-white text-base-content">
  <div>
  <img src="https://i.ibb.co/98f6phs/Car-Logo.png" alt="" className="w-64"/>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link to="/" className="link link-hover">Branding</Link> 
    <Link to="/" className="link link-hover">Design</Link> 
    <Link to="/" className="link link-hover">Marketing</Link> 
    <Link to="/" className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="/" className="link link-hover">About us</Link> 
    <Link to="/" className="link link-hover">Contact</Link> 
    <Link to="/" className="link link-hover">Jobs</Link> 
    <Link to="/" className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to="/" className="link link-hover">Terms of use</Link> 
    <Link to="/" className="link link-hover">Privacy policy</Link> 
    <Link to="/" className="link link-hover">Cookie policy</Link>
  </div>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</footer>
    );
};

export default Footer;