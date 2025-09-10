export default function EducationPage() {
  const courses = [
    {
      id: 1,
      title: "French Language for Beginners",
      provider: "Diaspora Language Institute",
      level: "Beginner",
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      provider: "TechInBurkina",
      level: "Intermediate",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Traditional Crafts Workshop",
      provider: "Cultural Heritage Center",
      level: "All levels",
      duration: "4 sessions",
    },
  ];

  const scholarships = [
    {
      id: 1,
      name: "Burkina Faso Government Scholarship",
      level: "University",
      deadline: "March 15, 2025",
      amount: "Full tuition + living stipend",
    },
    {
      id: 2,
      name: "Diaspora Education Fund",
      level: "High School/University",
      deadline: "May 30, 2025",
      amount: "$2,000",
    },
    {
      id: 3,
      name: "Women in STEM Scholarship",
      level: "University",
      deadline: "April 1, 2025",
      amount: "$5,000",
    },
  ];

  const mentoring = [
    {
      id: 1,
      name: "Professional Career Guidance",
      mentor: "Aminata Diallo",
      field: "International Business",
      availability: "Monthly sessions",
    },
    {
      id: 2,
      name: "University Application Support",
      mentor: "Jean-Baptiste Ouédraogo",
      field: "Engineering",
      availability: "Bi-weekly sessions",
    },
    {
      id: 3,
      name: "Entrepreneurship Mentorship",
      mentor: "Fatoumata Konaté",
      field: "Social Enterprise",
      availability: "Flexible schedule",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Education & Learning</h1>
        <p className="text-black/70 mt-2">
          Expand your knowledge and skills with our educational resources
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Online Courses</h2>
        <p className="text-black/70 mb-6">
          Enhance your skills with courses designed for the diaspora community
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-sm text-black/60 mt-1">{course.provider}</p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="bg-burkina-green/10 text-burkina-green px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="text-black/60">{course.duration}</span>
              </div>
              <button className="mt-4 w-full btn-primary text-sm">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Scholarship Opportunities
        </h2>
        <p className="text-black/70 mb-6">
          Financial support for continuing your education
        </p>

        <div className="space-y-4">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="border border-black/10 rounded-lg p-4 md:flex md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{scholarship.name}</h3>
                <p className="text-sm text-black/60 mt-1">
                  Level: {scholarship.level}
                </p>
                <p className="mt-2">
                  <span className="font-medium">Amount:</span>{" "}
                  {scholarship.amount}
                </p>
              </div>
              <div className="mt-3 md:mt-0 text-right">
                <p className="text-sm text-black/60">
                  Deadline: {scholarship.deadline}
                </p>
                <button className="mt-2 btn-secondary text-sm">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-semibold mb-4">Mentoring Programs</h2>
        <p className="text-black/70 mb-6">
          Connect with experienced professionals in your field of interest
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {mentoring.map((mentor) => (
            <div
              key={mentor.id}
              className="border border-black/10 rounded-lg p-4"
            >
              <h3 className="font-semibold text-lg">{mentor.name}</h3>
              <p className="text-sm text-black/60 mt-1">
                Mentor: {mentor.mentor}
              </p>
              <p className="mt-2 text-black/80">{mentor.field}</p>
              <p className="mt-2 text-sm text-black/60">
                {mentor.availability}
              </p>
              <button className="mt-4 w-full btn-primary text-sm">
                Request Mentorship
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
