"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
    return (
        <header>
            <nav className="bg-white text-black">
                <div className="container mx-auto px-4 flex justify-between items-center h-32">
                    <Link href="/" className={pathname === "/" ? "underline text-2xl" : "text-2xl text-black"}>Portfolio</Link>

                    <div className="hidden md:flex space-x-6">
                        <div>
                            <Link href="/about" className={pathname === "/about" ? "underline" : "hover:text-gray-300"}>
                                About Me
                            </Link>
                        </div>
                        <div>
                            <Link href="/skills" className={pathname === "/skills" ? "underline" : "hover:text-gray-300"}>
                                Skills
                            </Link>
                        </div>
                        <div>
                            <Link href="/services" className={pathname === "/services" ? "underline" : "hover:text-gray-300"}>
                                Services
                            </Link>
                        </div>
                        <div>
                            <Link href="/work" className={pathname === "/work" ? "underline" : "hover:text-gray-300"}>
                                Work
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className={pathname === "/contact" ? "bg-black border-white p-4 border-2 text-white" : "text-black border-black p-4 border-2 hover:text-gray-300"}
                            >
                                Get in touch!
                            </Link>
                        </div>
                    </div>

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
