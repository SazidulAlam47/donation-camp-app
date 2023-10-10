import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 w-60">
                <Link to="/" className=" w-40 ml-6">
                    <img
                        className="w-full"
                        src="/Logo.png"
                        alt="Donation"
                    />
                </Link>
            </div>
            <div className="flex-none mr-6">
                <ul className="flex gap-5 px-1">
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-400 underline"
                                    : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-400 underline"
                                    : ""
                            }
                            to="/donations"
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-400 underline"
                                    : ""
                            }
                            to="/statistics"
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
