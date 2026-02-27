import { motion } from 'framer-motion';
import { Cog, Cpu, Zap, Wrench, Truck, CheckCircle, ArrowRight } from 'lucide-react';

export default function Divisions() {
  const divisions = [
    {
      id: 'precision',
      icon: Cog,
      title: 'APEX Precision Engineering',
      tagline: 'Präzision auf den Mikrometer',
      description: 'Hochpräzise CNC-Bearbeitung und Fertigungslösungen für anspruchsvollste Anforderungen in Luft- und Raumfahrt, Automotive und Medizintechnik.',
      revenue: '€145M',
      employees: '680',
      capabilities: [
        '5-Achs CNC-Fräsen (Toleranz ±0.002mm)',
        'Drehen von Präzisionsteilen bis Ø800mm',
        'EDM (Senk- und Drahterosion)',
        'Koordinatenmesstechnik (CMM)',
        'Oberflächenbehandlung und Beschichtung',
      ],
      industries: [
        'Luft- und Raumfahrt (AS9100D zertifiziert)',
        'Automotive Tier 1 Zulieferer',
        'Medizintechnik (ISO 13485)',
        'Halbleiterindustrie',
        'Optische Systeme',
      ],
      caseStudy: {
        title: 'Turbinenschaufeln für Luftfahrtindustrie',
        description: 'Fertigung von 12.000 hochpräzisen Turbinenschaufeln für einen führenden Triebwerkshersteller. Lieferzeit: 18 Monate. Null Reklamationen.',
      },
    },
    {
      id: 'automation',
      icon: Cpu,
      title: 'APEX Automation Systems',
      tagline: 'Die Zukunft der Fertigung',
      description: 'Ganzheitliche Automatisierungslösungen von der Konzeption bis zur Inbetriebnahme. Industrie 4.0 Ready.',
      revenue: '€120M',
      employees: '520',
      capabilities: [
        'Robotik-Integration (ABB, KUKA, Fanuc)',
        'SPS-Programmierung (Siemens, Allen-Bradley)',
        'SCADA und MES-Systeme',
        'Vision-Systeme und Qualitätskontrolle',
        'Predictive Maintenance Lösungen',
      ],
      industries: [
        'Automobilindustrie',
        'Lebensmittel & Pharma',
        'Logistik & Warehousing',
        'Elektronikfertigung',
        'Verpackungsindustrie',
      ],
      caseStudy: {
        title: 'Smart Factory Transformation',
        description: 'Vollständige Automatisierung einer Produktionslinie mit 18 Robotern, IoT-Sensorik und KI-basierter Qualitätskontrolle. ROI nach 2,3 Jahren.',
      },
    },
    {
      id: 'energy',
      icon: Zap,
      title: 'APEX Energy Infrastructure',
      tagline: 'Energie für morgen',
      description: 'Komponenten und Systeme für moderne Energieinfrastruktur mit Fokus auf erneuerbare Energien und Netzstabilität.',
      revenue: '€95M',
      employees: '410',
      capabilities: [
        'Mittelspannungsschaltanlagen bis 36kV',
        'Transformatorenstationen',
        'Komponenten für Windkraftanlagen',
        'Photovoltaik-Wechselrichter Integration',
        'Smart Grid Lösungen',
      ],
      industries: [
        'Energieversorger',
        'Windenergie (Onshore & Offshore)',
        'Solarparks',
        'Industrielle Großverbraucher',
        'Öffentliche Infrastruktur',
      ],
      caseStudy: {
        title: 'Offshore-Windpark Netzanbindung',
        description: 'Lieferung von 24 Mittelspannungsschaltanlagen für 400MW Offshore-Windpark in der Nordsee. Projektvolumen: €12M.',
      },
    },
    {
      id: 'services',
      icon: Wrench,
      title: 'APEX Industrial Services',
      tagline: 'Immer einsatzbereit',
      description: 'Professionelle Wartung, Reparatur und technisches Facility Management mit garantierten Reaktionszeiten.',
      revenue: '€75M',
      employees: '580',
      capabilities: [
        'Präventive Wartung nach Herstellervorgaben',
        'Notfall-Reparatur (24/7 Bereitschaft)',
        'Maschinenüberholung und Retrofit',
        'Ersatzteilmanagement',
        'Technisches Facility Management',
      ],
      industries: [
        'Produktionsbetriebe',
        'Logistikzentren',
        'Kraftwerke',
        'Chemische Industrie',
        'Lebensmittelproduktion',
      ],
      caseStudy: {
        title: 'Langzeit-Servicevertrag Automobilwerk',
        description: '5-Jahres-Vertrag für Wartung von 200+ Produktionsanlagen. Verfügbarkeit: 99,2%. Ungeplante Ausfälle reduziert um 67%.',
      },
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'APEX Logistics Solutions',
      tagline: 'Präzise. Pünktlich. Planbar.',
      description: 'Spezialisierte Logistiklösungen für industrielle Anforderungen mit Fokus auf Just-in-Time und Supply Chain Optimierung.',
      revenue: '€45M',
      employees: '210',
      capabilities: [
        'Hochregallager (bis 40m Höhe)',
        'Temperaturgeführte Lagerung (-25°C bis +25°C)',
        'Just-in-Time Sequenzierung',
        'Gefahrgutlagerung (ADR zertifiziert)',
        'Supply Chain Consulting',
      ],
      industries: [
        'Automotive (JIT/JIS)',
        'Pharma & Healthcare',
        'Elektronik & High-Tech',
        'Chemie',
        'E-Commerce B2B',
      ],
      caseStudy: {
        title: 'JIT-Logistik für Automobilhersteller',
        description: 'Sequenzierte Anlieferung von 2.400 Teilen/Tag an 3 Produktionslinien. Liefertreue: 99,8%. Null Produktionsstopps in 18 Monaten.',
      },
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
            <h1 className="text-5xl font-bold mb-6">Unsere Geschäftsbereiche</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fünf spezialisierte Divisionen mit gebündelter Expertise. Jeder Geschäftsbereich
              agiert eigenständig, profitiert aber von Synergien innerhalb der Gruppe.
            </p>
          </motion.div>
        </div>
      </section>

      {divisions.map((division, index) => (
        <section
          key={division.id}
          id={division.id}
          className={index % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-navy-primary rounded-sm">
                  <division.icon className="w-10 h-10 text-gold-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary">{division.title}</h2>
                  <p className="text-gold-primary font-medium">{division.tagline}</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
                {division.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border border-gray-200 p-6 rounded-sm">
                  <div className="text-sm text-gray-500 mb-2">Umsatz 2025</div>
                  <div className="text-3xl font-bold text-navy-primary">{division.revenue}</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-sm">
                  <div className="text-sm text-gray-500 mb-2">Mitarbeiter</div>
                  <div className="text-3xl font-bold text-navy-primary">{division.employees}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">
                    Kernkompetenzen
                  </h3>
                  <ul className="space-y-3">
                    {division.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">
                    Zielbranchen
                  </h3>
                  <ul className="space-y-3">
                    {division.industries.map((industry) => (
                      <li key={industry} className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-navy-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-navy-primary text-white p-8 rounded-sm">
                <div className="text-gold-primary text-sm font-semibold mb-2">
                  REFERENZPROJEKT
                </div>
                <h4 className="text-2xl font-bold mb-3">{division.caseStudy.title}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {division.caseStudy.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Interesse an einer Zusammenarbeit?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie den jeweiligen Geschäftsbereich direkt oder unsere zentrale Koordination.
          </p>
          <a
            href="mailto:info@apex-group.de"
            className="inline-block bg-gold-primary text-navy-primary px-8 py-3 rounded-sm font-semibold hover:bg-gold-dark transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  );
}
