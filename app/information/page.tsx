import Link from 'next/link';

export default function InformationPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Information & Resources</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Practical guides and resources for Burkinabé living abroad. Immigration, legal help, financial literacy, healthcare access, and more.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Immigration & Visas', desc: 'Step-by-step guides for visa applications, residency permits, citizenship pathways, and travel documents for Burkinabé abroad.', category: 'Legal', icon: '🛂' },
          { title: 'Financial Literacy', desc: 'Managing money across borders. Remittances, banking for diaspora, investment options, and building generational wealth.', category: 'Finance', icon: '💰' },
          { title: 'Healthcare Access', desc: 'Navigating healthcare systems abroad. Insurance options, finding culturally competent providers, and mental health resources.', category: 'Health', icon: '🏥' },
          { title: 'Housing & Relocation', desc: 'Finding affordable housing, understanding tenant rights, relocation checklists, and settling-in guides by country.', category: 'Living', icon: '🏠' },
          { title: 'Legal Rights', desc: 'Know your rights as a Burkinabé abroad. Employment law, anti-discrimination protections, and where to get legal aid.', category: 'Legal', icon: '⚖️' },
          { title: 'Education Guides', desc: 'School enrollment for children, university admissions, credential recognition, and language learning resources.', category: 'Education', icon: '📚' },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-black/10 bg-white hover:shadow-md transition-shadow">
            <span className="text-3xl shrink-0">{item.icon}</span>
            <div>
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">{item.category}</span>
              <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-black/60">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">📋 Need Specific Help?</h2>
        <p className="text-black/70 mb-4">Our resource library is growing. Suggest a topic or contribute your knowledge to help fellow Burkinabé.</p>
        <Link href="#" className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
          Request a Resource
        </Link>
      </section>
    </div>
  );
}
