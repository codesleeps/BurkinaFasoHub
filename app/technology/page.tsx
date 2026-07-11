import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Digital Technology</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Bridging the digital divide for Burkina Faso. Tech initiatives, startup ecosystem, digital skills training, and innovation from the diaspora.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/10 bg-white p-8 hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-4 block">🚀</span>
          <h2 className="text-2xl font-bold mb-3">Startup Ecosystem</h2>
          <p className="text-black/60 mb-4">Burkina Faso&apos;s tech scene is growing. Discover startups, incubators, and venture funding opportunities.</p>
          <ul className="space-y-2 text-sm text-black/70">
            <li className="flex gap-2"><span className="text-green-600">✓</span> Ouagadougou Tech Hub</li>
            <li className="flex gap-2"><span className="text-green-600">✓</span> Faso Innovation Challenge</li>
            <li className="flex gap-2"><span className="text-green-600">✓</span> Diaspora Angel Network</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-8 hover:shadow-lg transition-shadow">
          <span className="text-4xl mb-4 block">💡</span>
          <h2 className="text-2xl font-bold mb-3">Digital Skills</h2>
          <p className="text-black/60 mb-4">Free and low-cost training programs in coding, cybersecurity, data science, and digital marketing.</p>
          <ul className="space-y-2 text-sm text-black/70">
            <li className="flex gap-2"><span className="text-green-600">✓</span> Web Development Bootcamps</li>
            <li className="flex gap-2"><span className="text-green-600">✓</span> Google Career Certificates</li>
            <li className="flex gap-2"><span className="text-green-600">✓</span> Women in Tech Program</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4">
        {[
          { title: 'AgriTech', desc: 'Drones, soil sensors, and mobile apps transforming Burkinabé farming.', icon: '🌾' },
          { title: 'FinTech', desc: 'Mobile money, remittance apps, and financial inclusion for the unbanked.', icon: '📱' },
          { title: 'EdTech', desc: 'Digital classrooms bridging the education gap in rural communities.', icon: '📚' },
          { title: 'HealthTech', desc: 'Telemedicine and health information systems improving healthcare access.', icon: '🏥' },
        ].map((item) => (
          <div key={item.title} className="p-5 rounded-xl border border-black/10 bg-white text-center hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">{item.icon}</span>
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-xs text-black/60">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-3">💻 Tech Workshops</h2>
          <div className="space-y-3">
            {[
              { title: 'Introduction to Python Programming', date: 'Every Saturday — Online', level: 'Beginner' },
              { title: 'Building Your First Mobile App', date: 'Monthly — Ouagadougou', level: 'Intermediate' },
              { title: 'Cybersecurity Fundamentals', date: 'Self-paced — Online', level: 'All levels' },
            ].map((w) => (
              <div key={w.title} className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <p className="font-semibold text-sm">{w.title}</p>
                  <p className="text-xs text-black/50">{w.date}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{w.level}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">🌍 Diaspora Tech Talent</h2>
          <p className="text-white/70 mb-6 text-sm">
            Are you a Burkinabé in tech? Join our talent directory to connect with opportunities, mentor others, and contribute to Burkina Faso&apos;s digital future.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Software Engineers</span><span className="font-bold">340+</span></div>
            <div className="flex justify-between"><span>Data Scientists</span><span className="font-bold">85+</span></div>
            <div className="flex justify-between"><span>UX/UI Designers</span><span className="font-bold">120+</span></div>
            <div className="flex justify-between"><span>Cybersecurity</span><span className="font-bold">65+</span></div>
          </div>
          <Link href="/login" className="inline-block mt-6 bg-white text-black font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
            Join the Directory
          </Link>
        </div>
      </section>
    </div>
  );
}
