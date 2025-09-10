export default function NetworkingPage() {
  const sampleGroups = [
    {
      id: 1,
      name: "Burkinabé Professionals - Paris",
      members: 124,
      description: "Networking for professionals in the Paris area",
    },
    {
      id: 2,
      name: "Students & Young Professionals - NYC",
      members: 87,
      description:
        "Support network for students and young professionals in New York",
    },
    {
      id: 3,
      name: "Artists & Creatives - Berlin",
      members: 42,
      description: "Community for Burkinabé artists and creatives in Berlin",
    },
    {
      id: 4,
      name: "Tech Enthusiasts - Montreal",
      members: 65,
      description: "Technology and innovation networking group",
    },
  ];

  const sampleOpportunities = [
    {
      id: 1,
      title: "Internship at Local NGO",
      company: "Burkina Development Initiative",
      location: "Ouagadougou",
      type: "Internship",
    },
    {
      id: 2,
      title: "Cultural Event Coordinator",
      company: "Diaspora Cultural Center",
      location: "Abidjan",
      type: "Part-time",
    },
    {
      id: 3,
      title: "Remote Software Developer",
      company: "TechInBurkina",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Networking</h1>
        <p className="text-black/70 mt-2">
          Connect with fellow Burkinabé around the world
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Find Your Local Community
        </h2>
        <p className="text-black/70 mb-6">
          Join existing groups or create your own to connect with other members
          of the Burkinabé diaspora in your area.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {sampleGroups.map((group) => (
            <div
              key={group.id}
              className="border border-black/10 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg">{group.name}</h3>
              <p className="text-sm text-black/60 mt-1">
                {group.members} members
              </p>
              <p className="mt-2 text-black/80">{group.description}</p>
              <button className="mt-3 btn-primary text-sm">Join Group</button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="btn-secondary">Create New Group</button>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Opportunities</h2>
        <p className="text-black/70 mb-6">
          Find jobs, internships, and volunteer opportunities within our
          community.
        </p>

        <div className="space-y-4">
          {sampleOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="border border-black/10 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{opportunity.title}</h3>
                <p className="text-sm text-black/60 mt-1">
                  {opportunity.company} • {opportunity.location}
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex items-center gap-3">
                <span className="text-xs bg-burkina-green/10 text-burkina-green px-2 py-1 rounded">
                  {opportunity.type}
                </span>
                <button className="text-sm text-burkina-green font-medium">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="btn-secondary">View All Opportunities</button>
        </div>
      </section>
    </div>
  );
}
