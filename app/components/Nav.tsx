import { NavLink } from "remix";

const Nav = () => {
  return (
    <header className="h-[92px]">
      <nav className="flex justify-center px-[45px] lg:px-[112px] font-semibold">
        <ul className="flex text-[18px] lg:text-[20px] my-[34px] uppercase text-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#FCD34D]" : "")}
            >
              Home <span className="font-normal">🏡</span>
            </NavLink>
          </li>
          <li className="px-[45px] lg:px-[90px]">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-[#FCD34D]" : "")}
            >
              Blog <span className="font-normal">📖</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-[#FCD34D]" : "")}
            >
              About me <span className="font-normal">👦</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
