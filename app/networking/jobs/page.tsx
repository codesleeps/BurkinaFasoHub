import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Job Board</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Opportunities that see you — not just your CV.</p>
          <p>The global job market is vast, but finding employers who value the unique perspective that comes with a Burkinabe background, multilingual fluency, and cross-cultural experience isn't always easy. Our Job Board curates opportunities specifically for diaspora talent — roles at companies that understand the strength of diverse teams, positions that leverage your cultural fluency as a competitive advantage, and employers actively seeking the skills our community brings to the table.</p>
          <p>We partner with multinational corporations, NGOs, startups, and diaspora-founded businesses that are committed to inclusive hiring. Listings span every sector — technology, finance, healthcare, international development, creative industries, and beyond — and every seniority level from internships to C-suite. Each posting includes transparent salary information wherever possible, because we believe in equity from the first click. Employers who post here are not just hiring; they are investing in the red, green, and gold talent pipeline that is quietly reshaping industries worldwide.</p>
          <p>For job seekers, the board is free and always will be. Create a profile, set alerts for roles matching your expertise, and access resources like diaspora-focused career coaching and interview preparation. For employers, posting here means reaching a concentrated pool of multilingual, globally-minded professionals with deep ties to West Africa and beyond. Post a role, and watch the diaspora respond.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Burkinabe and West African diaspora professionals seeking career opportunities worldwide, and employers committed to building diverse, globally-fluent teams.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
