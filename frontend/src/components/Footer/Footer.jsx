import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ch Muni Kiran. All rights reserved.</p>
        <p>
          Built with <span role="img" aria-label="love">❤️</span> using MERN Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer; 