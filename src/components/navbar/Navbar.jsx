import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
import { Nav } from './Navbar.styles';

function MyComponent() {
  return (
    <Nav>
      <h3>HELLO WORLD</h3>
      <div className="links">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </Nav>
  );
}

export default MyComponent;
