import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
import { Nav, Logo } from './Navbar.styles';

function MyComponent() {
  return (
    <Nav>
      <Logo>HELLO WORLD</Logo>
      <div className="links">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/projects" activeClassName="active">Projects</Link>
      </div>
    </Nav>
  );
}

export default MyComponent;
