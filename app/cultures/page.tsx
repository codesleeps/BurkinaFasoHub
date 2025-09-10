export default function CulturesPage() {
  const events = [
    {
      id: 1,
      title: "Burkina Faso Cultural Festival",
      date: "June 15, 2025",
      location: "Paris, France",
      description:
        "Annual celebration of Burkinabé culture with music, dance, and food",
    },
    {
      id: 2,
      title: "Traditional Music Workshop",
      date: "July 3, 2025",
      location: "Montreal, Canada",
      description: "Learn to play traditional Burkinabé instruments",
    },
    {
      id: 3,
      title: "Heritage Photography Exhibition",
      date: "August 20, 2025",
      location: "New York, USA",
      description: "Showcasing the beauty of Burkina Faso through photography",
    },
  ];

  const traditions = [
    {
      id: 1,
      name: "Masks and Ceremonies",
      description:
        "Traditional masks used in various ceremonies and their meanings",
    },
    {
      id: 2,
      name: "Storytelling (Griot)",
      description:
        "The ancient art of oral storytelling and history preservation",
    },
    {
      id: 3,
      name: "Traditional Clothing",
      description: "Faso Dan Fani and other traditional garments",
    },
    {
      id: 4,
      name: "Festivals",
      description:
        "Major cultural and religious festivals celebrated in Burkina Faso",
    },
  ];

  const recipes = [
    {
      id: 1,
      name: "Riz Gras (Rice with Meat)",
      difficulty: "Medium",
      time: "45 mins",
    },
    {
      id: 2,
      name: "Poulet DG (Chicken DG)",
      difficulty: "Easy",
      time: "30 mins",
    },
    {
      id: 3,
      name: "Tô (Sorghum Porridge)",
      difficulty: "Hard",
      time: "60 mins",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Cultural Heritage</h1>
        <p className="text-black/70 mt-2">
          Celebrating the rich traditions of Burkina Faso
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <p className="text-black/70 mb-6">
          Join us in celebrating Burkinabé culture around the world
        </p>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="border border-black/10 rounded-lg p-4 md:flex md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-black/60 mt-1">
                  {event.date} • {event.location}
                </p>
                <p className="mt-2 text-black/80">{event.description}</p>
              </div>
              <button className="mt-3 md:mt-0 btn-primary text-sm">RSVP</button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Cultural Traditions</h2>
        <p className="text-black/70 mb-6">
          Explore the rich heritage and traditions of Burkina Faso
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {traditions.map((tradition) => (
            <div
              key={tradition.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold text-lg">{tradition.name}</h3>
              <p className="mt-2 text-black/80">{tradition.description}</p>
              <button className="mt-3 text-sm text-burkina-green font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Traditional Recipes</h2>
        <p className="text-black/70 mb-6">
          Cook authentic Burkinabé dishes in your own kitchen
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold">{recipe.name}</h3>
              <div className="mt-3 flex justify-between text-sm">
                <span className="bg-burkina-green/10 text-burkina-green px-2 py-1 rounded">
                  {recipe.difficulty}
                </span>
                <span className="text-black/60">{recipe.time}</span>
              </div>
              <button className="mt-4 w-full btn-secondary text-sm">
                View Recipe
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
