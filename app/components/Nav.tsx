import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { NavLink } from "remix";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    // const changeLanguage = async (language: string) => {
    //     const res = await fetch(`http://localhost:3000/languages/${language}`);
    //     const data = await res.json();
    //     console.log(data);
    // };

    return (
        <>
            <header
                className={`h-auto  absolute w-full ${
                    isOpen && "bg-[#131313]"
                } top-0`}
            >
                <nav className="flex flex-col items-center justify-center font-semibold sm:flex-row px-[16px] relative z-50 ">
                    {/* <header className="flex text-[18px] lg:text-[24px] my-[34px] uppercase text-center text-white hover:text-[#81ECEC] transition">
                    <h1>CA Gustavo</h1>
                </header> */}
                    <div className="sm:hidden pt-[16px] flex justify-end w-full ">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                    <ul
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } w-full sm:w-auto  flex-col sm:flex-row sm:flex text-[18px] lg:text-[18px] sm:my-[34px] uppercase  text-center gap-[36px] sm:gap-[45px] lg:gap-[45px] py-[18px] sm:py-[0px]`}
                    >
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
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? "text-[#FCD34D]" : ""
                                }
                            >
                                PROJECTS{" "}
                                <span className="font-normal">💻️</span>
                            </NavLink>
                        </li>
                        <li>
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
                        className="font-semibold uppercase "
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
            <div className="h-[92px]"></div>
        </>
    );
};

export default Nav;
