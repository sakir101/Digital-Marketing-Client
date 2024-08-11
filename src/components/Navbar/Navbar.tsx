import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-50 flex justify-center sticky top-0 z-50">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="no-underline">
              <p className="text-lg text-black ">Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
