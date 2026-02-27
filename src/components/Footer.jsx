import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const divisions = [
    { name: 'Precision Engineering', href: '/divisions#precision' },
    { name: 'Automation Systems', href: '/divisions#automation' },
    { name: 'Energy Infrastructure', href: '/divisions#energy' },
    { name: 'Industrial Services', href: '/divisions#services' },
    { name: 'Logistics Solutions', href: '/divisions#logistics' },
  ];

  return (
    <footer className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="APEX Industrial Group" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Seit 1987 Ihr Partner für industrielle Exzellenz in Präzisionstechnik, Automation und Infrastruktur.
            </p>
          </div>

          <div>
            <h3 className="text-gold-primary font-semibold mb-4">Geschäftsbereiche</h3>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.name}>
                  <a
                    href={division.href}
                    className="text-sm text-gray-300 hover:text-gold-primary transition-colors"
                  >
                    {division.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-primary font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-gold-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-gold-primary transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-sm text-gray-300 hover:text-gold-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-gray-300 hover:text-gold-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-primary font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Königsallee 92<br />40212 Düsseldorf</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+492111234567" className="hover:text-gold-primary transition-colors">
                  +49 211 123 456-7
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@apex-group.de" className="hover:text-gold-primary transition-colors">
                  info@apex-group.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-secondary mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} APEX Industrial Group GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
