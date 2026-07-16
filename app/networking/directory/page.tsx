import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Professional Directory</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Connect with Burkinabe professionals worldwide — wherever your journey has taken you.</p>
          <p>The Burkina Faso diaspora spans continents, industries, and generations — yet our greatest asset remains each other. The Professional Directory is your gateway to discovering Burkinabe professionals across the globe, from software engineers in Silicon Valley to physicians in Paris, architects in Abidjan to academics in Montreal. Whether you're seeking a mentor, scouting talent for your next venture, or simply wanting to know who else carries the red, green, and gold with pride in your field, this directory puts the strength of our global community at your fingertips.</p>
          <p>Built by the diaspora for the diaspora, the directory lets you filter by industry, location, and expertise so you can find exactly the connection you need. Every profile tells a story — not just a CV, but the lived experience of a Burkinabe professional navigating global careers while staying rooted in shared identity. We verify all listings to ensure this remains a trusted space where our community can grow together.</p>
          <p>You are not alone in your professional journey. Behind every profile is someone who understands the unique pride and challenges of representing Burkina Faso on the world stage. Create your listing today and become a visible part of the network that is quietly powering careers, collaborations, and opportunities across every time zone.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Burkinabe professionals at every career stage, from recent graduates to seasoned executives, looking to connect, be discovered, and strengthen the diaspora professional fabric.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
