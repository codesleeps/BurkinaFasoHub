import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Community Groups</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Find your people — by city, by passion, by shared identity.</p>
          <p>No matter where you call home today, there is a Burkina Faso community waiting to welcome you. Our Community Groups bring together diaspora members around what matters most: geography, shared interests, and the unbreakable bond of our heritage. Join a regional chapter in New York, London, Dakar, or Tokyo and connect with Burkinabe neighbors who understand your daily life. Or dive into an interest-based group — from Burkinabe food enthusiasts and Afrobeat lovers to tech innovators and Francophone literature circles.</p>
          <p>These groups are more than chat channels. They are living, breathing extensions of home — places where someone will know the best spot for riz gras in your city, where you can practice Moore or Dioula with fellow speakers, and where the red, green, and gold fly high at every gathering. Regional chapters organize regular meetups, cultural celebrations, and mutual support networks, while interest groups spark collaborations that often grow into friendships, businesses, and lifelong bonds.</p>
          <p>Starting a group is simple. If your city or passion isn't yet represented, step forward and become a community builder — we provide the platform and support; you bring the energy. The diaspora grows stronger with every connection made, and every group started plants a new root for our collective identity to flourish far from home.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Anyone seeking belonging — newcomers settling into a new city, long-time diaspora members looking to reconnect with their culture, and community-minded individuals ready to lead and organize.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
