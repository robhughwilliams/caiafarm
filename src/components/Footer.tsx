import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#5f6360' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Caia Farm</h3>
            <p className="mb-4" style={{ color: '#b1d3ef' }}>
              A working farm with three diverse businesses: premium barn rentals, 
              agricultural services, and sustainable farming operations in a beautiful countryside setting.
            </p>
            <div className="flex items-center" style={{ color: '#b1d3ef' }}>
              <MapPin className="h-5 w-5 mr-3" style={{ color: '#80d19d' }} />
              <span>Beautiful countryside location</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block hover:text-white transition-colors" style={{ color: '#b1d3ef' }}>
                Home
              </a>
              <a href="/units" className="block hover:text-white transition-colors" style={{ color: '#b1d3ef' }}>
                Barn Units
              </a>
              <a href="/about" className="block hover:text-white transition-colors" style={{ color: '#b1d3ef' }}>
                Farm History
              </a>
              <a href="/enquiry" className="block hover:text-white transition-colors" style={{ color: '#b1d3ef' }}>
                Contact Us
              </a>
            </div>
            
            {/* Business Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2" style={{ color: '#80d19d' }}>Our Businesses</h4>
              <div className="space-y-1">
                <a 
                  href="https://www.ryecroftmeadow.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors text-sm"
                  style={{ color: '#b1d3ef' }}
                >
                  Ryecroft Meadow
                </a>
                <a 
                  href="https://www.byproductservices.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors text-sm"
                  style={{ color: '#b1d3ef' }}
                >
                  Byproduct Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#507e37' }}>
          <p style={{ color: '#b1d3ef' }}>
            © 2024 Caia Farm - Where tradition meets innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
