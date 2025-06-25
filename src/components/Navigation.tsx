
import { useState } from "react";
import { Menu, X, Home, Building, Mail, Info, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSisterCompaniesOpen, setIsSisterCompaniesOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Units Info", href: "/units", icon: Building },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Enquiry", href: "/enquiry", icon: Mail },
  ];

  const sisterCompanies = [
    { name: "Ryecroft Meadow", href: "https://www.ryecroftmeadow.com/" },
    { name: "Byproduct Services", href: "https://www.byproductservices.co.uk/" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-green-700 transition-colors">
             🚜 Caia Farm Barns
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </a>
            ))}
            
            {/* Sister Companies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSisterCompaniesOpen(!isSisterCompaniesOpen)}
                className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
              >
                Sister Companies
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isSisterCompaniesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSisterCompaniesOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {sisterCompanies.map((company) => (
                      <a
                        key={company.name}
                        href={company.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-700 transition-colors"
                        onClick={() => setIsSisterCompaniesOpen(false)}
                      >
                        {company.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Sister Companies */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Sister Companies</p>
                {sisterCompanies.map((company) => (
                  <a
                    key={company.name}
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-green-700 transition-colors py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {company.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
