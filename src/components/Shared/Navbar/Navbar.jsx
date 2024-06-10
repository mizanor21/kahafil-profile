import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/experience"}>Experience</NavLink>
      </li>
      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200">
      <div className="navbar  py-3 container mx-auto lg:max-w-[1800px]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-serif"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-lg md:text-2xl font-serif">
            Kahafil Ora
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-serif">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">
            Profile
            <FaDownload />
          </button>

          {/* <Link to={""}>
            <FaFacebookSquare />
          </Link>
          <Link to={""}>
            <FaLinkedin />
          </Link>
          <Link to={""}>
            <FaYoutube />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
