import { Link } from "@tanstack/react-router";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <Link to="/about" className="text-lg px-3 py-2">
        About
      </Link>
      <Link to="/work" className="text-lg px-3 py-2">
        Projects
      </Link>
      <Link to="/contact" className="text-lg px-3 py-2">
        Contact
      </Link>
    </div>
  );
};
