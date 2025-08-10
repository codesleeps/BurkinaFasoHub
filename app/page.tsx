import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Connect. Inform. Celebrate. Learn. Build.
          </h1>
          <p className="text-lg text-black/70">
            A modern hub for the Burkina Faso diaspora: networking, culture, education, digital technology, daily news, and a curated shop.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href="/networking">Join the network</Link>
            <Link className="btn-secondary" href="/blog">Latest news</Link>
            <Link className="inline-flex items-center gap-2 px-4 py-2 font-semibold border border-black/10 rounded-md hover:bg-black/5" href="/shop">Shop</Link>
          </div>
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden border border-black/5 shadow-sm" aria-hidden>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #EF3340, #009739)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-burkina-gold h-24 w-24 shadow-lg" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-6">
        {[
          { title: 'Networking', href: '/networking', desc: 'Profiles, groups and opportunities' },
          { title: 'Information', href: '/information', desc: 'Resources for life abroad' },
          { title: 'Cultures', href: '/cultures', desc: 'Events, arts and heritage' },
          { title: 'Education', href: '/education', desc: 'Courses, scholarships, mentoring' },
        ].map((card) => (
          <Link key={card.href} href={card.href} className="card p-5 hover:-translate-y-0.5 transition-transform">
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-sm text-black/70">{card.desc}</p>
          </Link>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Link href="/technology" className="card p-6">
          <h3 className="font-semibold mb-1">Digital Technology</h3>
          <p className="text-sm text-black/70">Explore tech initiatives, startups and workshops.</p>
        </Link>
        <Link href="/blog" className="card p-6">
          <h3 className="font-semibold mb-1">News from Burkina Faso</h3>
          <p className="text-sm text-black/70">Read the latest headlines aggregated daily.</p>
        </Link>
      </section>
    </div>
  )
}
