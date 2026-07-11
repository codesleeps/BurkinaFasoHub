import Link from 'next/link';

export default function CulturesPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Culture & Heritage</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Celebrating the rich cultural tapestry of Burkina Faso. From Mossi traditions to contemporary arts, explore the heritage that connects us.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-red-700 to-yellow-600 p-8 flex flex-col justify-end text-white">
          <span className="text-sm font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block w-fit mb-3">Heritage</span>
          <h2 className="text-2xl font-bold mb-2">Traditional Festivals</h2>
          <p className="text-white/80">FESPACO, SIAO, Nuits Atypiques de Koudougou — the festivals that define Burkinabé identity on the world stage.</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-green-800 to-green-500 p-8 flex flex-col justify-end text-white">
          <span className="text-sm font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block w-fit mb-3">Arts</span>
          <h2 className="text-2xl font-bold mb-2">Contemporary Arts Scene</h2>
          <p className="text-white/80">From Ouagadougou galleries to international exhibitions — Burkinabé artists making waves in visual arts, sculpture, and film.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Languages', desc: 'Mooré, Dioula, Fulfuldé and more. Resources for learning and preserving Burkina Faso\'s 60+ languages.', icon: '🗣️' },
          { title: 'Cuisine', desc: 'Recipes and stories behind riz gras, tô, poulet bicyclette, and the flavors of Burkina Faso.', icon: '🍚' },
          { title: 'Music & Dance', desc: 'From traditional balafon to modern coupé-décalé. The rhythms that move Burkina Faso.', icon: '🥁' },
          { title: 'Fashion & Textiles', desc: 'Faso Dan Fani, bogolan, and contemporary Burkinabé fashion designers on the global stage.', icon: '👘' },
          { title: 'Storytelling', desc: 'Oral traditions, griot histories, and modern Burkinabé literature and cinema.', icon: '📖' },
          { title: 'Cultural Calendar', desc: 'Upcoming events, celebrations, and cultural gatherings in the diaspora and at home.', icon: '📅' },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-xl border border-black/10 bg-white hover:shadow-md transition-shadow text-center">
            <span className="text-4xl block mb-3">{item.icon}</span>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-black/60">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">🇧🇫 Share Your Story</h2>
        <p className="text-black/70 mb-4 max-w-xl mx-auto">Every Burkinabé has a story. Submit your cultural experience, family tradition, or artistic work to be featured.</p>
        <Link href="#" className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
          Contribute
        </Link>
      </section>
    </div>
  );
}
