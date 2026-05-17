import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <header className="md:container mx-auto p-4 mb-24">
            <nav>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost md:text-xl">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex flex-col md:flex-row gap-2">
                            <input type="text" placeholder="&#x1F50D; Search" className="input input-bordered w-24 md:w-auto" />
                            <div className="dropdown dropdown-end">
                                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full bg-[#0BE58A] flex items-center justify-center">
                                        <CgProfile className="text-" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="flex flex-col justify-center items-center text-center bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[500px] text-white rounded-3xl gap-5">
                <h2 className="text-5xl font-bold">Discover an exceptional cooking <br /> className tailored for you!</h2>
                <p className="font-normal text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-className Programmer.</p>

                <div className="flex justify-center items-center gap-6">
                    <button className="btn rounded-full bg-[#0BE58A] border-none text-black btn-primary">Explore Now</button>
                    <button className="btn rounded-full bg-transparent border-white text-white btn-primary">Our Feedback</button>
                </div>

            </div>

        </header>
    );
};

export default Header;