import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border/40 px-6 py-4">
      <ul className="flex items-center space-x-6 text-sm font-medium">
        <li>
          <Link to="/home" className="text-text-muted hover:text-text-primary transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-text-muted hover:text-text-primary transition-colors">About</Link>
        </li>
        <li>
          <Link to="/login" className="text-brand-hover hover:text-white font-semibold transition-colors">Login / Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
