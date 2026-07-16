import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Business Network</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Build across borders. Trade on trust. Grow the diaspora economy.</p>
          <p>Burkinabe entrepreneurs are building businesses in every corner of the world — from agritech startups in Ouagadougou to logistics firms in Dubai, creative agencies in Paris to fintech ventures in Nairobi. The Business Network exists to connect these founders, investors, and operators into a single, powerful marketplace of ideas, capital, and collaboration. When a Burkinabe entrepreneur in Toronto needs a supplier in Bobo-Dioulasso, or an investor in Abidjan is looking for diaspora-led ventures to back, this is where those connections happen.</p>
          <p>We facilitate B2B introductions grounded in shared identity and trust — a currency that runs deeper than any contract. Through curated networking events, industry-specific roundtables, and a verified member directory, the Business Network surfaces real opportunities: joint ventures, supplier relationships, investment deals, and cross-border partnerships. Members gain access to a private forum where entrepreneurs share market intelligence, navigate regulatory landscapes together, and celebrate wins under the shared banner of red, green, and gold.</p>
          <p>The diaspora represents billions in combined purchasing power, expertise, and ambition. The Business Network is our vehicle for turning that latent potential into thriving enterprises that create jobs, circulate wealth within our community, and showcase Burkinabe excellence to the world. Whether you're a solo founder seeking your first international client or an established company exploring new markets, your next partner is already here.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Burkinabe entrepreneurs, founders, freelancers, investors, and business professionals seeking B2B connections, partnerships, and cross-border opportunities.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
