import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    // { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="">
              <img src="/logo.png" alt="logo" className="w-20 h-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={
                    link.label === "Contact" ? handleContactClick : undefined
                  }
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Client Login
            </Button> */}
            {/* <Button variant="default" size="sm" className="flex items-center gap-2 bg-gradient-primary">
              <Users className="h-4 w-4" />
              Team Login
            </Button> */}
            <Link to={`tel:917358250143`}>
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-2 bg-gradient-primary"
              >
                <PhoneCall className="h-4 w-4" />
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`
                }
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.label === "Contact") {
                    handleContactClick(e);
                  }
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-2 pt-4 w-full">
              {/* <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center gap-2"
              >
                <User className="h-4 w-4" />
                Client Login
              </Button>
              <Button
                variant="default"
                size="sm"
                className="flex items-center justify-center gap-2 bg-gradient-primary"
              >
                <Users className="h-4 w-4" />
                Team Login
              </Button> */}
              <Link to={`tel:917358250143`} className="">
                <Button
                  variant="default"
                  size="sm"
                  className="flex items-center gap-2 bg-gradient-primary"
                >
                  <PhoneCall className="h-4 w-4" />
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
