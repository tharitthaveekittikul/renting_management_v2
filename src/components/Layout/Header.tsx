import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Renting Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/homes"}>Homes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
