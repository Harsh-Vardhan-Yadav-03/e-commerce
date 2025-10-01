import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'PRODUCTS',
      links: [
        'Footwear',
        'Clothing',
        'Accessories',
        'Outlet-Sale',
        'New Arrivals',
        'Special Offer',
        'Flat 50% Off!',
      ],
    },
    {
      title: 'SPORTS',
      links: [
        'Cricket',
        'Running',
        'Football',
        'Gym/Training',
        'Tennis',
        'Outdoor',
        'Basketball',
        'Swimming',
      ],
    },
    {
      title: 'COLLECTIONS',
      links: [
        'Ultraboost',
        'Superstar',
        'NMD',
        'Sustainability',
        'Predator',
        'Parley',
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        'Help',
        'Customer Services',
        'Returns & Exchanges',
        'Shipping',
        'Order Tracker',
        'Store Finder',
      ],
    },
    {
      title: 'COMPANY INFO',
      links: [
        'About Us',
        'Press',
        'Careers',
        'Entity Details',
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      {/* Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-3">Free & Fast Delivery</h3>
            <p className="text-muted-foreground">
              Get your orders delivered quickly. Free delivery on orders above ₹999.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-muted-foreground">
              Shop with 100% secure payment methods including UPI, cards, and wallets.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
            <p className="text-muted-foreground">
              Enjoy hassle-free 7-day returns and quick refunds.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-bold text-sm mb-4">FOLLOW US</h4>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-2">
            <Link to="/support" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/support" className="hover:text-primary transition-colors">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link to="/support" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
          <div className="text-center text-sm text-gray-400">
            © 2024 alphaBeeta India Marketing Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
