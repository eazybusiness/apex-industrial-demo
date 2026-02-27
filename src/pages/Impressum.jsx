export default function Impressum() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-primary mb-8">Impressum</h1>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2">
                <p className="font-semibold">APEX Industrial Group GmbH</p>
                <p>Königsallee 92</p>
                <p>40212 Düsseldorf</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>Telefon: +49 211 123 456-7</p>
                <p>Telefax: +49 211 123 456-99</p>
                <p>E-Mail: info@apex-group.de</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Registereintrag
              </h2>
              <div className="space-y-2">
                <p>Eintragung im Handelsregister</p>
                <p>Registergericht: Amtsgericht Düsseldorf</p>
                <p>Registernummer: HRB 12345</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Vertretungsberechtigte Geschäftsführer
              </h2>
              <div className="space-y-2">
                <p>Dr. Michael Schneider (CEO)</p>
                <p>Thomas Weber (CFO)</p>
                <p>Dr.-Ing. Sarah Hoffmann (CTO)</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-2">
                <p>Dr. Michael Schneider</p>
                <p>Königsallee 92</p>
                <p>40212 Düsseldorf</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-primary mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Quelle: Erstellt mit dem Impressum-Generator der{' '}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-primary hover:underline"
                >
                  eRecht24
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
