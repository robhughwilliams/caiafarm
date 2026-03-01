import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Caia Farm</h3>
            <p className="mb-4 text-primary-foreground/70">
              A working farm with three diverse businesses: premium barn rentals,
              agricultural services, and sustainable farming operations in a beautiful countryside setting.
            </p>
            <div className="flex items-center text-primary-foreground/70">
              <MapPin className="h-5 w-5 mr-3 text-primary-foreground/50" />
              <span>Caia Farm,<br />Old Wrexham Road,<br />Gresford,<br />Wrexham.<br />LL12 8UA.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="/units" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Barn Units
              </a>
              <a href="/about" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Farm History
              </a>
              <a href="/enquiry" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact Us
              </a>
            </div>

            {/* Business Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-primary-foreground/50">Our Businesses</h4>
              <div className="space-y-1">
                <a
                  href="https://www.ryecroftmeadow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Ryecroft Meadow
                </a>
                <a
                  href="https://www.byproductservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Byproduct Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Caia Farm - Where tradition meets innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
