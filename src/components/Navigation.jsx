import React from 'react';

const Navigation = ({ brandLogo, brandName }) => {
    return (
      <nav className="flex justify-between items-center px-8 py-6 bg-white">
        <a
          href="/"
          target="_self"
          className="flex items-center gap-3 hover:opacity-80"
        >
          <img
            src={
              brandLogo ||
              "https://ucarecdn.com/090e26a0-2323-4245-b5f7-42a350c98425/-/format/auto/"
            }
            alt="ブランドロゴ"
            className="w-12 h-12"
          />
          <span className="text-xl font-medium">
            {brandName || "Ryo Yoneyama"}
          </span>
        </a>
        <div className="flex items-center gap-8">
          <a
            target="_self"
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </a>
          <a
            target="_self"
            href="/about"
            className="text-gray-600 hover:text-gray-900"
          >
            About
          </a>
          <a
            target="_self"
            href="/works"
            className="text-gray-600 hover:text-gray-900"
          >
            Works
          </a>
          <a
            target="_self"
            href="/blog"
            className="text-gray-600 hover:text-gray-900"
          >
            Blog
          </a>
        </div>
      </nav>
    );
  }

  export default Navigation;