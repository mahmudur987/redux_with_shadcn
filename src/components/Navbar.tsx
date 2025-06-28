import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          Note<span className="text-gray-800">Tech</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to={"task"} className="hover:text-blue-600 transition-colors">
              Task
            </Link>
          </li>
          <li>
            <a
              href="#benefits"
              className="hover:text-blue-600 transition-colors"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="https://super-liger-e3b5ad.netlify.app/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="https://super-liger-e3b5ad.netlify.app/signUp"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Signup
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <a
                href="#solutions"
                onClick={toggleMenu}
                className="hover:text-blue-600"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                onClick={toggleMenu}
                className="hover:text-blue-600"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="https://super-liger-e3b5ad.netlify.app/login"
                className="text-blue-600"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="https://super-liger-e3b5ad.netlify.app/signUp"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition inline-block w-full text-center"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
