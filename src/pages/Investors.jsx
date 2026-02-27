import { motion } from 'framer-motion';
import { TrendingUp, PieChart, FileText, Download, Calendar } from 'lucide-react';

export default function Investors() {
  const financialHighlights = [
    { label: 'Umsatz 2025', value: '€480M', change: '+8.2%' },
    { label: 'EBITDA', value: '€67M', change: '+9.1%' },
    { label: 'EBITDA-Marge', value: '14.0%', change: '+0.8pp' },
    { label: 'Eigenkapitalquote', value: '42%', change: 'stabil' },
  ];

  const revenueByDivision = [
    { division: 'Precision Engineering', percentage: 30, amount: '€145M' },
    { division: 'Automation Systems', percentage: 25, amount: '€120M' },
    { division: 'Energy Infrastructure', percentage: 20, amount: '€95M' },
    { division: 'Industrial Services', percentage: 16, amount: '€75M' },
    { division: 'Logistics Solutions', percentage: 9, amount: '€45M' },
  ];

  const documents = [
    { title: 'Geschäftsbericht 2025', type: 'PDF', size: '4.2 MB', date: '15.03.2026' },
    { title: 'Quartalsbericht Q4 2025', type: 'PDF', size: '1.8 MB', date: '28.02.2026' },
    { title: 'Investor Präsentation', type: 'PDF', size: '8.5 MB', date: '15.01.2026' },
    { title: 'Nachhaltigkeitsbericht 2025', type: 'PDF', size: '3.1 MB', date: '20.04.2026' },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transparente Kommunikation und nachhaltige Wertschöpfung für unsere Investoren.
              APEX Industrial Group steht für solides, profitables Wachstum in attraktiven
              Industriemärkten.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-primary mb-12 text-center">
            Finanzielle Highlights 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {financialHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-sm"
              >
                <div className="text-sm text-gray-500 mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-navy-primary mb-2">{item.value}</div>
                <div className="text-sm text-gold-primary font-medium">{item.change}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-gold-primary" />
                <h3 className="text-2xl font-bold text-navy-primary">Wachstumsstrategie</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-navy-primary">Organisches Wachstum:</strong> Durchschnittlich
                  8,5% p.a. seit 2015 durch Marktanteilsgewinne und Produktinnovationen.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-navy-primary">Selektive M&A:</strong> Gezielte Akquisitionen
                  zur Erweiterung technologischer Kompetenzen und geografischer Reichweite.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-navy-primary">Digitalisierung:</strong> Investitionen in
                  Industrie 4.0, IoT und KI-basierte Lösungen zur Effizienzsteigerung.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-navy-primary">Nachhaltigkeit:</strong> CO₂-Neutralität bis
                  2030, ESG-konforme Unternehmensführung.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <PieChart className="w-8 h-8 text-gold-primary" />
                <h3 className="text-2xl font-bold text-navy-primary">Umsatzverteilung</h3>
              </div>
              <div className="space-y-4">
                {revenueByDivision.map((item) => (
                  <div key={item.division}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.division}</span>
                      <span className="text-sm font-bold text-navy-primary">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gold-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-8 h-8 text-gold-primary" />
            <h2 className="text-3xl font-bold text-navy-primary">Finanzpublikationen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-sm hover:border-gold-primary transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy-primary mb-2 group-hover:text-gold-primary transition-colors">
                      {doc.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{doc.date}</span>
                      </span>
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gold-light rounded-sm transition-colors">
                    <Download className="w-5 h-5 text-navy-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Corporate Governance</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  APEX Industrial Group verpflichtet sich zu höchsten Standards der
                  Unternehmensführung und Transparenz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Unabhängiger Aufsichtsrat mit 5 Mitgliedern</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Externe Wirtschaftsprüfung durch Big Four Gesellschaft</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Compliance Management System nach ISO 37301</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary mt-1">•</span>
                    <span>Quartalsweise Berichterstattung an Investoren</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Investor Kontakt</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Für Anfragen zu Investor Relations wenden Sie sich bitte an:
                </p>
                <div className="bg-navy-secondary p-6 rounded-sm">
                  <div className="font-semibold text-white mb-1">Thomas Weber</div>
                  <div className="text-sm text-gold-primary mb-3">Chief Financial Officer</div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-400">E-Mail:</span>{' '}
                      <a href="mailto:ir@apex-group.de" className="text-white hover:text-gold-primary">
                        ir@apex-group.de
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Telefon:</span>{' '}
                      <a href="tel:+492111234560" className="text-white hover:text-gold-primary">
                        +49 211 123 456-0
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
