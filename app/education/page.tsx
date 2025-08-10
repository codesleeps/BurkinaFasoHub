export default function EducationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Education</h1>
      <p className="text-black/70">Courses, scholarships and mentoring. (Coming soon)</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">Language and culture classes</div>
        <div className="card p-4">Scholarship directory</div>
        <div className="card p-4">Tech upskilling workshops</div>
      </div>
    </div>
  )
}
