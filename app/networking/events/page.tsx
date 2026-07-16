import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <Link href="/networking" className="text-sm text-green-700 hover:underline">&larr; Back to Networking</Link>
      
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Events &amp; Meetups</h1>
        <div className="prose prose-lg max-w-3xl space-y-4 text-black/80">
          <p>Where the diaspora comes alive — in person and online.</p>
          <p>There is nothing quite like the energy of a room full of Burkinabe voices, the rhythm of coupe-decale filling the air, and the unmistakable aroma of poulet braise drifting through the crowd. Our Events & Meetups bring that energy to cities worldwide, blending professional development with the cultural celebration that reminds us who we are. From formal conferences and industry panels to casual maquis-style hangouts and Independence Day galas, every event is an opportunity to reconnect with your roots and expand your network.</p>
          <p>The calendar spans both hemispheres and both modes — virtual and in-person — because we know the diaspora never sleeps. Join a LinkedIn masterclass hosted by a Burkinabe recruiter in London. Attend a summer picnic in Central Park organized by the New York chapter. Tune into a virtual fireside chat with a Burkinabe entrepreneur whose company just raised its Series A. Every event carries the warmth and hospitality that defines our culture: you will leave with new contacts, fresh ideas, and the unmistakable feeling of having spent time with family.</p>
          <p>Hosting an event? We make it easy. Submit your gathering — whether it's a professional workshop, a cultural festival, or an informal meetup — and we'll amplify it to our global audience. The red, green, and gold fly at every event we touch. Come for the programming; stay for the people who make you proud to be Burkinabe.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-100 via-yellow-50 to-green-100 rounded-xl p-6 border border-black/5">
        <h2 className="font-bold text-lg mb-2">Who it's for</h2>
        <p className="text-black/70">Everyone. Professionals seeking career growth, families wanting cultural connection, newcomers looking to build community, and event organizers ready to bring the diaspora together.</p>
      </section>

      <section className="text-center py-4">
        <Link href="/signup" className="btn-primary inline-block">Join the Diaspora</Link>
      </section>
    </div>
  );
}
