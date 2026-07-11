import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Education & Opportunities</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Empowering the Burkinabé diaspora through education. Scholarships, online courses, professional development, and mentoring for all ages.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Scholarships', desc: 'Undergraduate, masters, and PhD funding opportunities for Burkinabé students worldwide. Updated monthly.', count: '15+ active', icon: '🎓' },
          { title: 'Online Learning', desc: 'Free and affordable courses in tech, business, languages, and trades. Learn at your own pace from anywhere.', count: '100+ courses', icon: '💻' },
          { title: 'Professional Certifications', desc: 'Industry-recognized certifications to boost your career. IT, project management, healthcare, and more.', count: '25+ paths', icon: '📜' },
          { title: 'Language Programs', desc: 'English, French, Arabic, and local language courses. Break language barriers in your new home.', count: '10+ languages', icon: '🌍' },
          { title: 'Youth Programs', desc: 'STEM camps, leadership development, and exchange programs for young Burkinabé aged 13-25.', count: 'All ages', icon: '🧒' },
          { title: 'Mentorship', desc: 'One-on-one guidance from experienced Burkinabé professionals. Career advice, CV reviews, and industry insights.', count: '200+ mentors', icon: '👨‍🏫' },
        ].map((item) => (
          <div key={item.title} className="group p-6 rounded-xl border border-black/10 bg-white hover:border-green-600/30 hover:shadow-md transition-all">
            <span className="text-3xl block mb-3">{item.icon}</span>
            <h3 className="text-lg font-bold mb-1 group-hover:text-green-700">{item.title}</h3>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">{item.count}</span>
            <p className="text-sm text-black/60 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🎓 Featured: Burkina Government Scholarship Program</h2>
          <p className="text-white/90 mb-6">
            The Ministry of Higher Education offers annual scholarships for diaspora students. Applications open every March for the September intake.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="inline-block bg-white text-green-800 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Learn More
            </Link>
            <Link href="#" className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Browse All Scholarships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
