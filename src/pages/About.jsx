import { motion } from 'framer-motion';
import { Target, Eye, Award, Globe } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '1987', event: 'Gründung als Präzisionsmechanik-Werkstatt in Düsseldorf' },
    { year: '1995', event: 'Expansion in die Automatisierungstechnik' },
    { year: '2003', event: 'Übernahme eines Energietechnik-Unternehmens' },
    { year: '2010', event: 'Einstieg institutioneller Investoren, Professionalisierung der Unternehmensgruppe' },
    { year: '2015', event: 'Erweiterung um Industrial Services Division' },
    { year: '2020', event: 'Launch der Logistics Solutions Division' },
    { year: '2025', event: 'Umsatz überschreitet €480M Marke' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Präzision',
      description: 'Höchste Qualitätsstandards in allen Fertigungsprozessen. Null-Fehler-Toleranz bei sicherheitskritischen Komponenten.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Kontinuierliche Investition in F&E (4,2% vom Umsatz). Frühe Adoption von Industrie 4.0 Technologien.',
    },
    {
      icon: Award,
      title: 'Zuverlässigkeit',
      description: 'Liefertreue von 98,7%. Langfristige Partnerschaften mit führenden Industrieunternehmen.',
    },
    {
      icon: Globe,
      title: 'Nachhaltigkeit',
      description: 'CO₂-neutrale Produktion bis 2030. ISO 14001 zertifiziertes Umweltmanagement.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Michael Schneider',
      position: 'CEO & Vorsitzender der Geschäftsführung',
      bio: '25 Jahre Erfahrung in der Industrieautomation. Promotion in Maschinenbau, TU München.',
    },
    {
      name: 'Thomas Weber',
      position: 'CFO',
      bio: 'Ehemals Partner bei einer Big Four Wirtschaftsprüfungsgesellschaft. MBA, INSEAD.',
    },
    {
      name: 'Dr.-Ing. Sarah Hoffmann',
      position: 'CTO',
      bio: 'Expertin für Industrie 4.0 und digitale Transformation. 15 Jahre bei führenden Technologiekonzernen.',
    },
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
            <h1 className="text-5xl font-bold mb-6">Über APEX Industrial Group</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Seit 1987 steht APEX für industrielle Exzellenz, technische Innovation und
              verlässliche Partnerschaft. Was als mittelständische Präzisionsmechanik-Werkstatt
              begann, ist heute eine diversifizierte Unternehmensgruppe mit fünf spezialisierten
              Geschäftsbereichen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-primary mb-12 text-center">
            Unsere Geschichte
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white border border-gray-200 p-6 rounded-sm">
                      <div className="text-2xl font-bold text-gold-primary mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-gold-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">
            Unsere Werte
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Diese Prinzipien leiten unser Handeln in allen Geschäftsbereichen
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm border border-gray-200 text-center"
              >
                <value.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">
            Geschäftsführung
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Erfahrene Führungskräfte mit nachgewiesener Expertise
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 rounded-sm"
              >
                <div className="w-24 h-24 bg-navy-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-navy-primary">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy-primary text-center mb-2">
                  {leader.name}
                </h3>
                <div className="text-gold-primary text-sm font-medium text-center mb-4">
                  {leader.position}
                </div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Zertifizierungen & Mitgliedschaften</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-gold-primary mb-2">ISO 9001</div>
              <div className="text-sm text-gray-300">Qualitätsmanagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-primary mb-2">ISO 14001</div>
              <div className="text-sm text-gray-300">Umweltmanagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-primary mb-2">ISO 45001</div>
              <div className="text-sm text-gray-300">Arbeitsschutz</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-primary mb-2">AS9100D</div>
              <div className="text-sm text-gray-300">Luft- & Raumfahrt</div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-navy-secondary">
            <p className="text-gray-300 mb-4">Mitglied bei:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>VDMA (Verband Deutscher Maschinen- und Anlagenbau)</span>
              <span>•</span>
              <span>Plattform Industrie 4.0</span>
              <span>•</span>
              <span>ZVEI (Zentralverband Elektrotechnik)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
