export default function TechnologyPage() {
  const startups = [
    {
      id: 1,
      name: "AgriTech Burkina",
      description: "Digital solutions for agriculture in Burkina Faso",
      funding: "$250K",
    },
    {
      id: 2,
      name: "EduConnect",
      description: "Online learning platform for rural communities",
      funding: "$180K",
    },
    {
      id: 3,
      name: "HealthBridge",
      description: "Telemedicine platform connecting rural clinics",
      funding: "$420K",
    },
  ];

  const bootcamps = [
    {
      id: 1,
      name: "Diaspora Coding Bootcamp",
      duration: "12 weeks",
      focus: "Full-stack development",
      nextSession: "January 2025",
    },
    {
      id: 2,
      name: "Data Science for Social Impact",
      duration: "8 weeks",
      focus: "Data analysis for NGOs",
      nextSession: "March 2025",
    },
    {
      id: 3,
      name: "Mobile App Development",
      duration: "10 weeks",
      focus: "Android & iOS development",
      nextSession: "February 2025",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Burkina Open Data",
      description: "Open-source repository of government data",
      contributors: 24,
    },
    {
      id: 2,
      name: "Sahel Weather API",
      description: "Weather data API for Sahel region",
      contributors: 18,
    },
    {
      id: 3,
      name: "Local Language NLP",
      description: "Natural language processing for local languages",
      contributors: 32,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Digital Technology</h1>
        <p className="text-black/70 mt-2">
          Innovation and tech initiatives in Burkina Faso and diaspora
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Tech Startups</h2>
        <p className="text-black/70 mb-6">
          Spotlight on innovative startups making an impact
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold text-lg">{startup.name}</h3>
              <p className="mt-2 text-black/80">{startup.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm bg-burkina-green/10 text-burkina-green px-2 py-1 rounded">
                  Funding: {startup.funding}
                </span>
                <button className="text-sm text-burkina-green font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Learning Opportunities</h2>
        <p className="text-black/70 mb-6">
          Coding bootcamps and technical training programs
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {bootcamps.map((bootcamp) => (
            <div
              key={bootcamp.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold text-lg">{bootcamp.name}</h3>
              <div className="mt-3 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Duration:</span>{" "}
                  {bootcamp.duration}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Focus:</span> {bootcamp.focus}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Next Session:</span>{" "}
                  {bootcamp.nextSession}
                </p>
              </div>
              <button className="mt-4 w-full btn-primary text-sm">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Open Source Projects</h2>
        <p className="text-black/70 mb-6">
          Contribute to projects that benefit the community
        </p>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-black/10 rounded-lg p-4 md:flex md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="mt-1 text-black/80">{project.description}</p>
              </div>
              <div className="mt-3 md:mt-0 flex items-center gap-4">
                <span className="text-sm text-black/60">
                  {project.contributors} contributors
                </span>
                <button className="btn-secondary text-sm">Contribute</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
