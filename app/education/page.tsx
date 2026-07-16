import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Education &amp; Opportunities
        </h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Knowledge is the bridge between where we are and where we dream of being. Whether
          you&apos;re a student seeking a scholarship, a professional earning a certification,
          or a parent looking for youth programs — we are building a community that lifts
          each other up through learning.
        </p>
      </section>

      {/* Education cards */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Scholarship Opportunities',
            icon: '🎓',
            desc: 'A growing directory of undergraduate, masters, and PhD funding opportunities open to Burkinabé students. We track programs from the Burkina government, international foundations, and partner universities.',
          },
          {
            title: 'Online Learning',
            icon: '💻',
            desc: 'Self-paced courses in technology, business, languages, and skilled trades. We highlight free and low-cost platforms accessible from anywhere — so financial barriers never block ambition.',
          },
          {
            title: 'Professional Certifications',
            icon: '📜',
            desc: 'Industry-recognized credentials in IT, project management, healthcare, and more. Guidance on which certifications carry weight with employers in your region, plus study resources to help you prepare.',
          },
          {
            title: 'Language Programs',
            icon: '🌍',
            desc: 'French for professional settings. English for newcomers to anglophone countries. Arabic. And resources for keeping Mooré, Dioula, and other Burkinabé languages alive in diaspora households.',
          },
          {
            title: 'Youth Programs',
            icon: '🧒',
            desc: 'STEM camps, leadership development, and cultural exchange opportunities for young Burkinabé aged 13–25. Programs that nurture pride in our heritage while preparing the next generation for a global future.',
          },
          {
            title: 'Mentorship',
            icon: '👨‍🏫',
            desc: 'One-on-one guidance from experienced Burkinabé professionals. Career advice, CV reviews, and industry insights. A growing network of mentors ready to support the next generation — and always welcoming new volunteers.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="card p-6 group hover:border-green-600/30"
          >
            <span className="text-3xl block mb-3">{item.icon}</span>
            <h3 className="text-lg font-bold mb-2 group-hover:text-burkina-green">
              {item.title}
            </h3>
            <p className="text-sm text-black/60">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Featured CTA */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🎓 Burkina Government Scholarship Programs
          </h2>
          <p className="text-white/90 mb-6">
            The Ministry of Higher Education, Research and Innovation offers annual scholarship
            opportunities for Burkinabé students — both at home and in the diaspora. Application
            windows and eligibility criteria vary by program. We track these announcements and
            share them as soon as they are published.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-block bg-white text-burkina-green font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Get Scholarship Alerts
            </Link>
            <Link
              href="/signup"
              className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">📚 Help Us Build This Directory</h2>
        <p className="text-black/70 mb-4 max-w-xl mx-auto">
          Our scholarship listings and program guides are community-powered. If you know of
          an opportunity — a grant, a summer program, a language course — share it. Together
          we can make sure no Burkinabé misses a chance to grow.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-burkina-green text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Join &amp; Contribute
        </Link>
      </section>
    </div>
  );
}
