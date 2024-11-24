import React from "react";

function Footer() {
  return (
    <div className="flex justify-center text-gray-600 my-12">
      <div className="w-[1400px]">
        {/* Top Section */}
        <div className="flex justify-between">
          {/* Categories */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-gray-500">Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          {/* About */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-gray-500">About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          {/* Support */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-gray-500">Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          {/* Community */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-gray-500">Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          {/* More From Fiverr */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg text-gray-500">More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200" />

       
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            <h2 className="text-lg font-bold">liverr</h2>
            <span className="text-sm text-center md:text-left whitespace-nowrap">© Liverr International Ltd. 2023</span>
          </div>
          {/* Right Section */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <img src="/img/twitter.png" alt="Twitter" className="w-6 h-6" />
              <img src="/img/facebook.png" alt="Facebook" className="w-6 h-6" />
              <img src="/img/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              <img src="/img/pinterest.png" alt="Pinterest" className="w-6 h-6" />
              <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6" />
            </div>
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <img src="/img/language.png" alt="Language" className="w-6 h-6" />
              <span>English</span>
            </div>
            {/* Currency Selector */}
            <div className="flex items-center gap-2">
              <img src="/img/coin.png" alt="Currency" className="w-6 h-6" />
              <span>USD</span>
            </div>
            {/* Accessibility Icon */}
            <img src="/img/accessibility.png" alt="Accessibility" className="w-6 h-6" />
          </div>
           {/* Footer (Optional for completeness) */}
     
      
        </div>
        <footer className="bg-gray-900 text-white py-2">
  <div className="max-w-screen-xl mx-auto text-center">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>

      </div>
      
    </div>
  );
}

export default Footer;
