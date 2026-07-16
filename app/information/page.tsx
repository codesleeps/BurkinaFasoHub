import Link from 'next/link';

export default function InformationPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Information &amp; Resources
        </h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Practical knowledge for everyday life — wherever you are. Navigating visas, managing
          money across borders, finding healthcare, understanding your rights. We gather and
          share the information that helps Burkinabé thrive in their new homes while staying
          rooted in who we are.
        </p>
      </section>

      {/* Resource cards */}
      <section className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: 'Immigration &amp; Visas',
            icon: '🛂',
            category: 'Legal',
            desc: 'Understanding visa categories, residency permits, citizenship pathways, and travel document requirements. Step-by-step guides written in plain language — because immigration systems shouldn&apos;t be a maze you face alone.',
          },
          {
            title: 'Financial Literacy',
            icon: '💰',
            category: 'Finance',
            desc: 'Managing money across borders: remittance comparisons, opening bank accounts as a newcomer, building credit, saving for the future, and understanding your tax obligations in both your host country and Burkina Faso.',
          },
          {
            title: 'Healthcare Access',
            icon: '🏥',
            category: 'Health',
            desc: 'How to navigate healthcare systems abroad — from registering with a doctor to understanding insurance. Finding culturally competent providers, mental health resources, and knowing where to turn in an emergency.',
          },
          {
            title: 'Housing &amp; Relocation',
            icon: '🏠',
            category: 'Living',
            desc: 'Finding your first home in a new country. Tenant rights, rental checklists, neighborhood guides, settling-in tips, and country-specific relocation resources contributed by Burkinabé who have been through it.',
          },
          {
            title: 'Legal Rights',
            icon: '⚖️',
            category: 'Legal',
            desc: 'Employment rights, anti-discrimination protections, and where to find legal aid. Know your rights as a worker, tenant, and person — and know where to go when those rights are challenged.',
          },
          {
            title: 'Education Guides',
            icon: '📚',
            category: 'Education',
            desc: 'Enrolling children in school, navigating university admissions, getting your qualifications recognized, and bridging education systems between Burkina Faso and your host country.',
          },
        ].map((item) => (
          <div key={item.title} className="card p-6 flex gap-4">
            <span className="text-3xl shrink-0">{item.icon}</span>
            <div>
              <span className="text-xs font-semibold text-burkina-green uppercase tracking-wide">
                {item.category}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-black/60">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Build with us */}
      <section className="bg-gradient-to-r from-burkina-green to-emerald-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🌍 Country-Specific Guides — Help Us Build Them
          </h2>
          <p className="text-white/90 mb-6">
            Every country has different rules, systems, and realities. Our vision is a library of
            guides tailored to the countries where Burkinabé live — written by people who have
            walked the path. If you have navigated life in Côte d&apos;Ivoire, France, Canada, the
            United States, or anywhere else, your experience is invaluable.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-burkina-green font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            Contribute a Guide
          </Link>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">📋 What Do You Need?</h2>
        <p className="text-black/70 mb-4 max-w-xl mx-auto">
          Our resource library grows with every contribution. Is there a topic you need help with —
          something we haven&apos;t covered yet? Let us know, or join and share what you know. The
          wisdom of the community is our greatest resource.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/signup"
            className="inline-block bg-burkina-gold text-burkina-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Join &amp; Request a Resource
          </Link>
        </div>
      </section>
    </div>
  );
}
