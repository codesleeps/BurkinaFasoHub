import Link from 'next/link';

export default function NetworkingPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Diaspora Networking</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Connect with fellow Burkinabé across the globe. Build professional relationships, find mentors, join community groups, and grow your network.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Professional Directory', desc: 'Find and connect with Burkinabé professionals worldwide. Browse by industry, location, or expertise.', icon: '👥', href: '/networking/directory' },
          { title: 'Community Groups', desc: 'Join regional and interest-based groups. From Ouagadougou to New York, find your community.', icon: '🏘️', href: '/networking/groups' },
          { title: 'Mentorship Program', desc: 'Give back or get guidance. Connect experienced professionals with the next generation of Burkinabé leaders.', icon: '🤝', href: '/networking/mentorship' },
          { title: 'Business Network', desc: 'B2B connections for Burkinabé entrepreneurs. Find suppliers, partners, and clients across the diaspora.', icon: '💼', href: '/networking/business' },
          { title: 'Events & Meetups', desc: 'In-person and virtual gatherings. Networking mixers, cultural celebrations, and professional conferences.', icon: '📅', href: '/networking/events' },
          { title: 'Job Board', desc: 'Opportunities for Burkinabé talent. Remote, local, and international positions from trusted employers.', icon: '💼', href: '/networking/jobs' },
        ].map((item) => (
          <Link key={item.title} href={item.href} className="group block p-6 rounded-xl border border-black/10 hover:border-green-600/30 hover:shadow-md transition-all bg-white">
            <span className="text-3xl mb-3 block">{item.icon}</span>
            <h3 className="text-lg font-bold mb-2 group-hover:text-green-700">{item.title}</h3>
            <p className="text-sm text-black/60">{item.desc}</p>
          </Link>
        ))}
      </section>

      <section className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Burkina Diaspora Network</h2>
        <p className="text-white/90 mb-6 max-w-xl">
          Over 5,000 Burkinabé across 30+ countries are already connecting. Create your profile, join discussions, and be part of something bigger.
        </p>
        <Link href="/signup" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-colors">
          Sign Up Free
        </Link>
      </section>
    </div>
  );
}
