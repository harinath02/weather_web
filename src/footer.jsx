import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="text-sm">
          <p>©2024 Developed By: Harinath</p>
        </div>
        <div className="text-sm">
          <a href="#" className="mx-2">Privacy & Cookies</a>
          <a href="#" className="mx-2">Terms of use</a>
          <a href="#" className="mx-2">Advertise</a>
          <a href="#" className="mx-2">Data Providers</a>
          <a href="#" className="mx-2">Feedback</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
