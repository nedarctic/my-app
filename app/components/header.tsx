export const Header = () => {
    return (
        <header>
            <nav className="bg-white text-black">
                <div className="container mx-auto px-4 flex justify-between items-center h-20">
                    <div className="text-lg font-bold">Portfolio</div>

                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-red-600 p-4 border-2 border-black"
                            >
                                Get in touch!
                            </a>
                        </li>
                    </ul>

                    <button className="md:hidden text-black hover:text-lg focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};
