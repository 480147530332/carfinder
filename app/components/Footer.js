import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            {/* <img src="/images/logo.png" alt="CarFinder" className="h-10 mr-3" /> */}
            <p className="text-2xl font-semibold text-purple-600">carfinder.co.in</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 text-center">
          <p className="text-lg font-medium text-purple-600">Call us at</p>
          <p className="text-2xl font-semibold text-3xl">9326655349</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">About Us</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Who we are</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">How it’s work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partner with us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Help</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Resources and Tools</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Quick Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Saved Carts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Video Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Social Media</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium">Subscribe to our newsletter</p>
          <p className="text-sm text-white mb-4">A monthly digest of the latest news, articles, and resources.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-64 text-white border-black"
            />
            <button className="px-6 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
            <p className="text-center md:text-left text-sm text-white max-w-lg">
            carfinder.co.in connects buyers and sellers directly, offering detailed service history (on request) and the ability to post specific requirements for a tailored car buying and selling experience.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 carfinder.co.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
