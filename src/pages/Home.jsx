import { motion } from 'framer-motion';
import { Cog, Cpu, Zap, Wrench, Truck, Award, Users, TrendingUp } from 'lucide-react';
import DivisionCard from '../components/DivisionCard';
import MetricCard from '../components/MetricCard';

export default function Home() {
  const heroSrc = `${import.meta.env.BASE_URL}hero.png`;
  const divisions = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'CNC-Bearbeitung und Präzisionsbauteile für Luft- und Raumfahrt, Automotive und Medizintechnik. ISO 9001 und AS9100 zertifiziert.',
      revenue: '€145M',
      href: '/divisions#precision',
    },
    {
      icon: Cpu,
      title: 'Automation Systems',
      description: 'Industrielle Automatisierung und Robotik-Integration. Smart Factory Lösungen und Industrie 4.0 Implementierung.',
      revenue: '€120M',
      href: '/divisions#automation',
    },
    {
      icon: Zap,
      title: 'Energy Infrastructure',
      description: 'Energieverteilungssysteme und Komponenten für erneuerbare Energien. Netzmodernisierung und Infrastrukturlösungen.',
      revenue: '€95M',
      href: '/divisions#energy',
    },
    {
      icon: Wrench,
      title: 'Industrial Services',
      description: 'Wartung, Reparatur und Überholung (MRO). Technisches Facility Management mit 24/7 Servicebereitschaft.',
      revenue: '€75M',
      href: '/divisions#services',
    },
    {
      icon: Truck,
      title: 'Logistics Solutions',
      description: 'Industrielle Logistik und Lagerhaltung. Supply Chain Optimierung und Just-in-Time Liefersysteme.',
      revenue: '€45M',
      href: '/divisions#logistics',
    },
  ];

  const metrics = [
    { value: '37', label: 'Jahre Industrieerfahrung', suffix: '+' },
    { value: '2.400', label: 'Mitarbeiter weltweit', suffix: '+' },
    { value: '€480', label: 'Umsatz 2025', suffix: 'M' },
    { value: '5', label: 'Spezialisierte Geschäftsbereiche' },
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2018',
    'AS9100D',
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSrc}
            alt="APEX Industrial Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Industrielle Exzellenz.<br />
            <span className="text-gold-primary">Seit 1987.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            Fünf spezialisierte Geschäftsbereiche. Eine integrierte Unternehmensgruppe.<br />
            Ihr Partner für Präzisionstechnik, Automation und Infrastrukturlösungen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/divisions"
              className="bg-gold-primary text-navy-primary px-8 py-3 rounded-sm font-semibold hover:bg-gold-dark transition-colors"
            >
              Geschäftsbereiche entdecken
            </a>
            <a
              href="/investors"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Investor Relations
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MetricCard {...metric} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-primary mb-4">
              Unsere Geschäftsbereiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fünf spezialisierte Divisionen mit gebündelter Expertise in industrieller Fertigung,
              Automation und Infrastruktur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DivisionCard {...division} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="w-16 h-16 text-gold-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zertifizierte Qualität</h3>
              <p className="text-gray-300 text-sm mb-4">
                Höchste Standards in allen Geschäftsbereichen
              </p>
              <div className="space-y-1">
                {certifications.map((cert) => (
                  <div key={cert} className="text-sm text-gold-light">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Users className="w-16 h-16 text-gold-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Erfahrenes Team</h3>
              <p className="text-gray-300 text-sm">
                Über 2.400 hochqualifizierte Mitarbeiter mit durchschnittlich 12 Jahren Betriebszugehörigkeit.
                Kontinuierliche Weiterbildung und Spezialisierung.
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-gold-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nachhaltiges Wachstum</h3>
              <p className="text-gray-300 text-sm">
                Kontinuierliches organisches Wachstum von durchschnittlich 8,5% p.a. seit 2015.
                Strategische Investitionen in Innovation und Digitalisierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-primary mb-6">
            Bereit für Ihre Anforderungen?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrem Projekt.
          </p>
          <a
            href="mailto:info@apex-group.de"
            className="inline-block bg-navy-primary text-white px-8 py-3 rounded-sm font-semibold hover:bg-navy-secondary transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  );
}
