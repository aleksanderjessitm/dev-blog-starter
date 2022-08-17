import Link from "next/link";
import { config } from "../../blogConfig";

interface Props {
    fullName: string
}

export default function Navbar({fullName}: Props) {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="flex items-center">
                    <button
                        className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="w-5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <Link href="/">
                        <a className="text-xl text-white pr-2 font-semibold">{config.fullName}</a>
                    </Link>
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-white opacity-60 hover:opacity-80 focus:opacity-80 transition duration-150 ease-in-out">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/blog"}>
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-white opacity-60 hover:opacity-80 focus:opacity-80 transition duration-150 ease-in-out">Blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}