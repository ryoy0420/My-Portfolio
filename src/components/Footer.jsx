'use client';
import React from 'react';

const Footer = ({ copyrightName }) => {
  const currentYear = new Date().getFullYear();
 
    return (
      <footer className="text-center py-8 text-gray-500 text-sm border-t">
        © {currentYear} {copyrightName}
      </footer>
    );
  }
 
export default Footer;