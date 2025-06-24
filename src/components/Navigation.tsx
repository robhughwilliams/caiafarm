
import { useState } from "react";
import { Menu, X, Home, Building, Mail, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Units Info", href: "/units", icon: Building },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Enquiry", href: "/enquiry", icon: Mail },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-green-800 hover:text-red-600 transition-colors">
              🏠 Countryside Barns
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-green-700 hover:text-red-600 transition-colors font-medium"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-green-700 hover:text-red-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
