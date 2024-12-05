import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 min-w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="min-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Portfolio
          </Link>

          <DesktopNav />

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && <MobileNav />}
    </nav>
  );
};

import { Outlet } from "@tanstack/react-router";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="min-w-full">
        <div className="z-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
