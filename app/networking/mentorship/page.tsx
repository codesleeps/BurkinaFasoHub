import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Mentorship Program</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Pay it forward. Lift as you climb. The next generation is watching.</p>
          <p>Every successful Burkinabe professional in the diaspora stands on someone's shoulders — a professor who saw potential, an elder who opened a door, a peer who shared a crucial contact. Our Mentorship Program formalizes this tradition of solidarite by pairing experienced professionals with the next generation of Burkinabe talent. Whether you're a student choosing a career path, a mid-career professional navigating a pivot, or an established leader ready to give back, mentorship is the thread that weaves our individual success into collective progress.</p>
          <p>We match mentors and mentees thoughtfully — aligning industries, career stages, languages, and goals to create relationships that matter. A three-month structured program provides the framework, but the connections often last a lifetime. Mentors guide mentees through navigating industries where Burkinabe voices are underrepresented, share hard-won insights about building credibility abroad, and open networks that transform trajectories. For mentors, the reward is profound: shaping the leaders who will carry our red, green, and gold into the future.</p>
          <p>Our alumni network tells the story best. Past mentees have launched startups, secured international scholarships, pivoted into tech from traditional fields, and stepped confidently into leadership roles. Many return as mentors themselves, creating a virtuous cycle that strengthens the entire diaspora ecosystem. Your experience — whatever form it takes — is someone else's roadmap. Share it.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Early-to-mid-career Burkinabe professionals and students seeking guidance, and experienced professionals ready to invest in the next wave of diaspora leadership.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
