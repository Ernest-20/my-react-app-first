import React  from "react";

function Header() {
  return (
       <header className="header">
        <h1 classname="logo">Little Lemon Restaurant</h1>

        <nav>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contact</a></li>
            </ul>  
        </nav>
       </header>
  );
}

export default Header;