import React from 'react';
import footerBg from '../../../img-assets/images/footer.png'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="text-left bg-no-repeat bg-cover bg-center" style={{"background": `url(${footerBg})`}}>
        <div className="container p-6 mx-auto">
          <div className="flex flex-wrap md:flex-row flex-col justify-between">
            <div className="mb-6">
              <h5 className="uppercas e font-bold mb-2.5 text-gray-400">Services</h5>
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray-800">Emergency Checkup</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">Monthly Checkup</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">Weekly Checkup</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">Deep Checkup</a>
                </li>
              </ul>
            </div> 
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-400">ORAL HEALTH</h5>
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray-800">Fluoride Treatment</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">Cavity Filling</a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">Teath Whitening</a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-400">OUR ADDRESS</h5>
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray-800">New York - 101010 Hudson</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-center p-4">
        Copyright {year} All Rights Reserved
        </div>
      </footer>
    );
};

export default Footer;