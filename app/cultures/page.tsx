import Link from 'next/link';

export default function CulturesPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Culture &amp; Heritage
        </h1>
        <p className="text-lg text-black/70 max-w-2xl">
          The red, green, and gold of our flag tell a story — of the land, the hope, and the riches of
          Burkina Faso. From Mooré proverbs whispered by elders to the thunder of djembe drums at
          FESPACO, this is the heartbeat that connects every Burkinabé, wherever we call home.
        </p>
      </section>

      {/* Featured festivals */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-red-700 to-yellow-600 p-8 flex flex-col justify-end text-white">
          <span className="text-sm font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block w-fit mb-3">
            Pan-African
          </span>
          <h2 className="text-2xl font-bold mb-2">FESPACO</h2>
          <p className="text-white/80">
            The Pan-African Film and Television Festival of Ouagadougou — Africa&apos;s largest film
            festival, held biennially. A celebration of African cinema that draws filmmakers and
            audiences from across the continent to our capital.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-green-800 to-emerald-500 p-8 flex flex-col justify-end text-white">
          <span className="text-sm font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block w-fit mb-3">
            Arts &amp; Crafts
          </span>
          <h2 className="text-2xl font-bold mb-2">SIAO</h2>
          <p className="text-white/80">
            The International Arts and Crafts Fair of Ouagadougou — a biennial showcase of African
            craftsmanship. From bogolan textiles to bronze sculptures, SIAO brings together artisans
            from across Africa in a vibrant celebration of handmade heritage.
          </p>
        </div>
      </section>

      {/* Culture cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Explore Our Heritage</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Languages',
              icon: '🗣️',
              desc: 'Mooré, Dioula, Fulfuldé — Burkina Faso is home to over 60 languages. Discover resources for learning, preserving, and passing on our mother tongues to the next generation.',
            },
            {
              title: 'Cuisine',
              icon: '🍚',
              desc: 'The aroma of riz gras simmering with tomatoes and spices. The earthy comfort of tô with gombo sauce. Grilled poulet bicyclette from a roadside stall in Ouaga. Recipes, stories, and the tastes of home.',
            },
            {
              title: 'Music &amp; Dance',
              icon: '🥁',
              desc: 'From the wooden keys of the balafon to the electrifying energy of coupé-décalé. Traditional rhythms, modern sounds, and the artists keeping Burkinabé music alive at home and abroad.',
            },
            {
              title: 'Fashion &amp; Textiles',
              icon: '👘',
              desc: 'Faso Dan Fani — the woven cotton cloth of our homeland — is more than fabric; it is identity. Meet the designers and artisans bringing Burkinabé style to the world, from traditional bogolan to contemporary runway collections.',
            },
            {
              title: 'Storytelling &amp; Oral Tradition',
              icon: '📖',
              desc: 'Before the written word, there were the griots — keepers of history, poets, and musicians. Their tradition lives on in Burkinabé literature, cinema, and the stories we tell our children in the diaspora.',
            },
            {
              title: 'Cultural Calendar',
              icon: '📅',
              desc: 'FESPACO. SIAO. Nuits Atypiques de Koudougou. Semaine Nationale de la Culture. Independence Day. Stay connected to the festivals and celebrations that mark the Burkinabé year — at home and in diaspora communities worldwide.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card p-6 text-center hover:-translate-y-0.5"
            >
              <span className="text-4xl block mb-3">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural spotlight */}
      <section className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🇧🇫 Faso Dan Fani — Wear Your Pride
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl">
          &ldquo;Faso Dan Fani&rdquo; means &ldquo;woven cloth of the homeland&rdquo; in Dioula.
          Championed by Thomas Sankara as a symbol of economic independence, it remains a powerful
          expression of Burkinabé identity. Every thread carries the story of our people — spun,
          dyed, and woven by artisans whose skills have been passed down through generations.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="inline-block bg-white text-burkina-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            Browse Faso Dan Fani Products
          </Link>
          <Link
            href="/signup"
            className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Share Your Cultural Story
          </Link>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">📸 Your Culture, Your Voice</h2>
        <p className="text-black/70 mb-4 max-w-xl mx-auto">
          Every Burkinabé carries a piece of home. Whether it&apos;s your grandmother&apos;s
          riz gras recipe, a family griot story, or photos from your last visit to Ouaga —
          your experience enriches our community. Coming soon: a member-contributed cultural
          archive. Join to help us build it.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-burkina-red text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Join &amp; Contribute
        </Link>
      </section>
    </div>
  );
}
