"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage since this is a static export
    const members = JSON.parse(localStorage.getItem("bf_members") || "[]");
    members.push({ name, email, interest, joined: new Date().toISOString() });
    localStorage.setItem("bf_members", JSON.stringify(members));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md space-y-4">
          <span className="text-5xl">🎉</span>
          <h2 className="text-2xl font-bold">Welcome to the Diaspora!</h2>
          <p className="text-black/70">
            Thanks for joining, {name || "friend"}. We'll be in touch soon. In the meantime, explore the hub.
          </p>
          <Link href="/" className="btn-primary inline-block">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-8 py-8">
      <section>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Join the Burkina Diaspora</h1>
        <p className="text-black/70">
          Connect with Burkinabe across the globe. Free membership, no spam.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Full name</label>
          <input
            id="name" type="text" required
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            id="email" type="email" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold mb-1">I'm interested in</label>
          <select
            id="interest"
            value={interest} onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-2.5 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
          >
            <option value="">Select one...</option>
            <option value="networking">Networking</option>
            <option value="information">Information & resources</option>
            <option value="culture">Culture & events</option>
            <option value="education">Education</option>
            <option value="technology">Digital technology</option>
            <option value="business">Business & entrepreneurship</option>
          </select>
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 text-white font-bold rounded-lg hover:opacity-95 transition-opacity">
          Join the Diaspora
        </button>
      </form>

      <p className="text-sm text-center text-black/50">
        Already a community delegate?{" "}
        <Link href="/login" className="text-green-700 font-semibold hover:underline">Delegate login</Link>
      </p>
    </div>
  );
}
