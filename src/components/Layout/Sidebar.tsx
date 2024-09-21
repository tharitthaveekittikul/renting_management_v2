import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <aside className="bg-gray-200 w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href={"/dashboard"} className="block p-2 hover:bg-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={"/homes"}
              className="block p-2 hover:bg-gray-300 rounded"
            >
              Homes
            </Link>
          </li>
          <li>
            <Link
              href={"/room-types"}
              className="block p-2 hover:bg-gray-300 rounded"
            >
              Room Types
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
