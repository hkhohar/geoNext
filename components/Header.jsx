'useclient'
import logo from "../Assets/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header class="sm:sticky top-0 z-10">
      <nav class="flex flex-row items-center justify-between sm:px-6 px-2 py-3 border-gray-300 bg-black">
        <div>
         
          <a href="/" class="flex items-center gap-2 font-bold cursor-pointer">
            <Image src={logo} alt="logo" class="w-[48px]"/>
            {/* <img src={logo} alt="logo" class="w-[48px]"/> */}
            <span class="text-gray-200 sm:block hidden">Geo Image Tagger</span>
          </a>
         
        </div>
        <div class="flex flex-row gap-3">
          <a
            href="/"
            class="px-2 py-1 rounded font-medium text-white bg-gray-700 cursor-pointer"
          >
            Sign Up
          </a>

          <a
            href="/"
            class="px-2 py-1 rounded font-medium text-white bg-gray-700 cursor-pointer"
          >
            Log In
          </a>
          <a
            href="/blog"
            target="_blank"
            class="px-2 py-1 rounded font-medium text-black bg-green-600 cursor-pointer"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
}
