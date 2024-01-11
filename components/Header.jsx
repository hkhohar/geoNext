'use client'

import logo from "../Assets/images/logo.png";
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sm:sticky top-0 z-10">
      <nav className="flex flex-row items-center justify-between sm:px-6 px-2 py-3 border-gray-300 bg-black">
        <div>
        <Link className="flex items-center gap-2 font-bold cursor-pointer" href="/">
        <img src="/logo.png" alt="logo" class="w-[48px]"/>
        <span className="text-gray-200 sm:block hidden">Geo Image Tagger</span>
        </Link>
        </div>
        <div className="flex flex-row gap-3">
          <a
            href="/"
            className="px-2 py-1 rounded font-medium text-white bg-gray-700 cursor-pointer"
          >
            Sign Up
          </a>

          <a
            href="/"
            className="px-2 py-1 rounded font-medium text-white bg-gray-700 cursor-pointer"
          >
            Log In
          </a>
          <a
            href="/blog"
            target="_blank"
            className="px-2 py-1 rounded font-medium text-black bg-green-600 cursor-pointer"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
}
