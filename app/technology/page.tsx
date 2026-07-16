import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Digital Technology
        </h1>
        <p className="text-lg text-black/70 max-w-2xl">
          From mobile money transforming rural markets to agritech startups reimagining farming,
          Burkina Faso&apos;s digital future is being built right now — by innovators at home and
          by diaspora talent bringing skills back. This is where we connect those dots.
        </p>
      </section>

      {/* Main cards */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-8">
          <span className="text-4xl mb-4 block">🚀</span>
          <h2 className="text-2xl font-bold mb-3">Startup Ecosystem</h2>
          <p className="text-black/60 mb-4">
            Burkina Faso&apos;s tech scene is young, energetic, and growing fast. Incubators
            and coworking spaces in Ouagadougou and Bobo-Dioulasso are nurturing the next
            wave of West African innovation. We spotlight the founders and ventures making
            it happen.
          </p>
          <ul className="space-y-2 text-sm text-black/70">
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Incubators &amp; coworking hubs in Ouagadougou
            </li>
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Pitch competitions &amp; innovation challenges
            </li>
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Diaspora angel investment network — <em>coming soon</em>
            </li>
          </ul>
        </div>
        <div className="card p-8">
          <span className="text-4xl mb-4 block">💡</span>
          <h2 className="text-2xl font-bold mb-3">Digital Skills</h2>
          <p className="text-black/60 mb-4">
            Practical training that leads to real opportunities. We curate programs in software
            development, cybersecurity, data science, and digital marketing — with a focus on
            free and low-cost options accessible from Burkina and the diaspora.
          </p>
          <ul className="space-y-2 text-sm text-black/70">
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Web &amp; mobile development bootcamps
            </li>
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Google &amp; Coursera career certificate pathways
            </li>
            <li className="flex gap-2">
              <span className="text-burkina-green">✓</span> Women in Tech mentorship circles — <em>join to help launch</em>
            </li>
          </ul>
        </div>
      </section>

      {/* Sector cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Key Sectors</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: 'AgriTech',
              icon: '🌾',
              desc: 'Soil sensors, drone mapping, and mobile platforms helping Burkinabé farmers increase yields, access markets, and adapt to a changing climate.',
            },
            {
              title: 'FinTech',
              icon: '📱',
              desc: 'Mobile money and digital payments bringing financial services to the unbanked. Remittance apps that make sending money home faster and cheaper.',
            },
            {
              title: 'EdTech',
              icon: '📚',
              desc: 'Digital classrooms and offline learning tools bridging the gap for students in rural communities where connectivity is a challenge.',
            },
            {
              title: 'HealthTech',
              icon: '🏥',
              desc: 'Telemedicine and health information systems extending quality care beyond Ouagadougou — connecting patients in remote areas with medical expertise.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-5 text-center">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-xs text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops + Talent */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-4">💻 Tech Workshops</h2>
          <p className="text-sm text-black/60 mb-4">
            We are building a calendar of workshops led by diaspora professionals. Topics
            range from introductory coding to advanced cloud infrastructure. Format: online
            and accessible from anywhere.
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Programming Fundamentals',
                detail: 'Online — self-paced modules',
                level: 'Beginner',
              },
              {
                title: 'Building Web Applications',
                detail: 'Online — cohort-based',
                level: 'Intermediate',
              },
              {
                title: 'Cybersecurity Awareness',
                detail: 'Online — self-paced',
                level: 'All levels',
              },
            ].map((w) => (
              <div
                key={w.title}
                className="flex justify-between items-center p-3 bg-white rounded-lg"
              >
                <div>
                  <p className="font-semibold text-sm">{w.title}</p>
                  <p className="text-xs text-black/50">{w.detail}</p>
                </div>
                <span className="text-xs bg-green-100 text-burkina-green px-2 py-1 rounded-full">
                  {w.level}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-black/40 mt-4">
            Full schedule with dates and facilitators — coming soon. Want to lead a workshop?{' '}
            <Link href="/signup" className="text-burkina-green underline">
              Sign up to contribute
            </Link>
            .
          </p>
        </div>
        <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">🌍 Diaspora Tech Talent</h2>
          <p className="text-white/70 mb-6 text-sm">
            Burkina Faso&apos;s diaspora includes software engineers, data scientists, cybersecurity
            experts, product designers, and IT leaders working at companies around the world. If
            you are in tech, add your name — we are building a talent directory to connect skills
            with opportunity, mentorship, and investment back home.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Software Engineers</span>
              <span className="font-bold">Growing community</span>
            </div>
            <div className="flex justify-between">
              <span>Data &amp; AI Specialists</span>
              <span className="font-bold">Growing community</span>
            </div>
            <div className="flex justify-between">
              <span>UX/UI Designers</span>
              <span className="font-bold">Growing community</span>
            </div>
            <div className="flex justify-between">
              <span>Cybersecurity</span>
              <span className="font-bold">Growing community</span>
            </div>
          </div>
          <Link
            href="/signup"
            className="inline-block mt-6 bg-white text-black font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            Join the Directory
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-burkina-red via-yellow-500 to-burkina-green rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🇧🇫 Build the Future With Us
        </h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">
          Whether you code, design, invest, teach, or dream — there is a place for you in
          Burkina Faso&apos;s digital story. Join to help us grow this community of innovators.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-white text-burkina-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-colors"
        >
          Get Involved
        </Link>
      </section>
    </div>
  );
}
