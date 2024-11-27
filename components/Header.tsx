import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex gap-9 bg-blue-500 h-12 font-bold p-5 items-center justify-between ">
      <ul className=" flex gap-9 bg-blue-500 h-12 font-bold p-5 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/career">
          <li>Career</li>
        </Link>
      </ul>
      <div className="flex gap-3 md:order-2 items-center justify-items-end">
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href="/login">LogIn</Link>
        </button>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href="/signUp">Sign up</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
