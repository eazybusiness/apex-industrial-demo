import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Geschäftsbereiche', href: '/divisions' },
    { name: 'Investor Relations', href: '/investors' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoSrc} alt="APEX Industrial Group" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-gold-primary'
                    : 'text-navy-primary hover:text-gold-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:info@apex-group.de"
              className="bg-navy-primary text-white px-6 py-2.5 rounded-sm hover:bg-navy-secondary transition-colors text-sm font-medium"
            >
              Kontakt
            </a>
          </div>

          <button
            className="md:hidden text-navy-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-3 text-sm font-medium ${
                  isActive(item.href) ? 'text-gold-primary' : 'text-navy-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:info@apex-group.de"
              className="block mt-4 bg-navy-primary text-white px-6 py-2.5 rounded-sm text-center text-sm font-medium"
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
