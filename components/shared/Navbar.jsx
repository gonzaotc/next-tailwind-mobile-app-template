import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = ({ className }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={className}>
      <ul className="flex h-full justify-evenly items-center font-bold">
        <li className={`link ${pathname === "/" && "link--active"}`}>
          <Link href="/">H</Link>
        </li>
        <li className={`link ${pathname === "/section2" && "link--active"}`}>
          <Link href="/section2">S2</Link>
        </li>
        <li className={`link ${pathname === "/section3" && "link--active"}`}>
          <Link href="/section3">S3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
