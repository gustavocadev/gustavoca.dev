import { useState } from "react";
import { LoaderFunction, NavLink, useLoaderData } from "remix";
import { readJSON } from "~/ioutils";

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const handleToggle = () => {
        setMenu(!menu);
    };

    // const changeLanguage = async (language: string) => {
    //     const res = await fetch(`http://localhost:3000/languages/${language}`);
    //     const data = await res.json();
    //     console.log(data);
    // };

    return (
        <header className="h-[92px]">
            <nav className="flex justify-center items-center px-[45px] lg:px-[112px] font-semibold">
                {/* <header className="flex text-[18px] lg:text-[24px] my-[34px] uppercase text-center text-white hover:text-[#81ECEC] transition">
                    <h1>CA Gustavo</h1>
                </header> */}
                <ul className="flex text-[18px] lg:text-[18px] my-[34px] uppercase  text-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-[#FCD34D]" : ""
                            }
                        >
                            Home <span className="font-normal">🏡</span>
                        </NavLink>
                    </li>
                    <li className="px-[45px] lg:px-[90px]">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-[#FCD34D]" : ""
                            }
                        >
                            Blog <span className="font-normal">📖</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-[#FCD34D]" : ""
                            }
                        >
                            About me <span className="font-normal">👦</span>
                        </NavLink>
                    </li>
                </ul>
                {/* <section
                    className={`flex flex-col text-[18px] lg:text-[18px] my-[34px]   rounded`}
                >
                    <button
                        onClick={handleToggle}
                        className="uppercase font-semibold "
                    >
                        Language 🌍
                    </button>
                    <section
                        className={`${
                            menu ? " block" : "hidden"
                        } text-center z-50 transition duration-200`}
                    >
                        <div className="bg-[#fcd34d] text-black block rounded absolute ">
                            <button className="rounded py-2 px-8 bg-[#fcd34d] hover:bg-yellow-500 cursor-pointer block w-full">
                                Español
                            </button>
                            <button className="rounded py-2 px-8 bg-[#fcd34d] hover:bg-yellow-500 cursor-pointer block w-full">
                                English
                            </button>
                        </div>
                    </section>
                </section> */}
            </nav>
        </header>
    );
};

export default Nav;
