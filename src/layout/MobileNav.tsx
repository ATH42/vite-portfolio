import { Link } from "@tanstack/react-router";

export const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Link to="/about" className="block text-lg px-3 py-2">
        About
      </Link>
      <Link to="/work" className="block text-lg px-3 py-2">
        Projects
      </Link>
      <Link to="/contact" className="block text-lg px-3 py-2">
        Contact
      </Link>
    </div>
  );
};
