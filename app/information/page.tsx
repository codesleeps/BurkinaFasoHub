export default function InformationPage() {
  const resources = [
    {
      category: "Legal & Documentation",
      items: [
        "Guide to obtaining residency permits in EU countries",
        "Documentation requirements for family reunification",
        "Legal rights of immigrants in different countries",
      ],
    },
    {
      category: "Healthcare",
      items: [
        "Finding healthcare providers who speak local languages",
        "Health insurance options for immigrants",
        "Mental health resources and support groups",
      ],
    },
    {
      category: "Financial Services",
      items: [
        "Opening bank accounts as a newcomer",
        "Understanding tax obligations for diaspora members",
        "Remittance services and money transfer options",
      ],
    },
    {
      category: "Education",
      items: [
        "Enrolling children in local schools",
        "Language learning resources",
        "Scholarship opportunities for Burkinabé students",
      ],
    },
  ];

  const countries = [
    {
      name: "France",
      population: "250,000+",
      description: "Largest Burkinabé community in Europe",
    },
    {
      name: "Côte d'Ivoire",
      population: "200,000+",
      description: "Major economic hub for West African diaspora",
    },
    {
      name: "Canada",
      population: "80,000+",
      description: "Growing community with strong professional networks",
    },
    {
      name: "USA",
      population: "70,000+",
      description: "Diverse communities across major cities",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Information Hub</h1>
        <p className="text-black/70 mt-2">
          Essential resources for life abroad
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Country Guides</h2>
        <p className="text-black/70 mb-6">
          Information about major destinations for the Burkinabé diaspora
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country, index) => (
            <div key={index} className="border border-black/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg">{country.name}</h3>
              <p className="text-sm text-black/60 mt-1">{country.population}</p>
              <p className="mt-2 text-black/80">{country.description}</p>
              <button className="mt-3 text-sm text-burkina-green font-medium">
                View Guide
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Resource Categories</h2>
        <p className="text-black/70 mb-6">
          Comprehensive guides on various aspects of life abroad
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="border border-black/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3">
                {resource.category}
              </h3>
              <ul className="space-y-2">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-burkina-green rounded-full mt-2 mr-2"></span>
                    <span className="text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Emergency Contacts</h2>
        <p className="text-black/70 mb-4">
          Important phone numbers and contacts for urgent situations
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-black/10 rounded-lg p-4">
            <h3 className="font-semibold">Burkina Faso Embassy</h3>
            <p className="text-sm text-black/60 mt-1">Paris, France</p>
            <p className="mt-2 text-black/80">+33 1 45 67 89 00</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4">
            <h3 className="font-semibold">Consulate Services</h3>
            <p className="text-sm text-black/60 mt-1">Abidjan, Côte d'Ivoire</p>
            <p className="mt-2 text-black/80">+225 21 23 45 67</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4">
            <h3 className="font-semibold">Diaspora Support</h3>
            <p className="text-sm text-black/60 mt-1">Ouagadougou</p>
            <p className="mt-2 text-black/80">+226 25 30 40 50</p>
          </div>
        </div>
      </section>
    </div>
  );
}
