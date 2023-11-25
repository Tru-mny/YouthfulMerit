import React, { useState, useEffect, useContext, useCallback } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'
import GreenButton from "../../stylingComponents/buttons/greenButton";
function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  let pagenum = 0;
  
  var pagePath = window.location.pathname;
  if(pagePath==="/faq") pagenum=4;
  if(pagePath==="/subscriptions") pagenum=5;
  if(pagePath==="/reviews") pagenum=1;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to='/'>
        <a className="navbar-left">Greentech</a>
        </Link>
        <ul>
            <li className={`li ${(pagenum===0)? "selected" : ""}`}>
            <Link to='/'>
                <a href="#" className={`a ${(pagenum===0)? "selected" : ""}`}>Home</a>
                </Link>
            </li>
            <li className={`li ${(pagenum===1)? "selected" : ""}`}>
              <Link to='/reviews'>
                <a href="#" className={`a ${(pagenum===1)? "selected" : ""}`}>Reviews</a>
              </Link>
            </li>
            <li className={`li ${(pagenum===4)? "selected" : ""}`}>
              <Link to='/faq'>
                <a href="#" className={`a ${(pagenum===4)? "selected" : ""}`}>FAQ</a>
              </Link>
            </li>
            <li className={`li ${(pagenum===5)? "selected" : ""}`}>
              <Link to='/subscriptions'>
                <a href="#" className={`a ${(pagenum===5)? "selected" : ""}`}>Subscriptions</a>
              </Link>
            </li>
      </ul>
        <Link to={localStorage.getItem("access_token") ? '/dashboard' : '/login'} className="login-btn">
            {!localStorage.getItem("access_token") &&
                <GreenButton name="Log in" size="small"></GreenButton>}
            {localStorage.getItem("access_token") &&
                <GreenButton name="Profile" size="small"></GreenButton>}
        </Link>
    </nav>
  );
}

export default Navbar;
