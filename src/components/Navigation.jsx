'use client';
import React from 'react';
import Link from 'next/link'; // next/link をインポート

const Navigation = ({ brandLogo, brandName }) => {
    return (
      <nav className="flex justify-between items-center px-8 py-6 bg-white">
        <Link href="/" passHref legacyBehavior>
            <a className="flex items-center gap-3 hover:opacity-80">
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
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" passHref legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">About</a>
          </Link>
          {/* Works, Blog へのリンクも同様に追加 */}
          <Link href="/works" passHref legacyBehavior> 
            <a className="text-gray-600 hover:text-gray-900">Works</a>
          </Link>
          <Link href="/blog" passHref legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">Blog</a>
          </Link>
        </div>
      </nav>
    );
  }

  export default Navigation;
