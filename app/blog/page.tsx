import { Suspense } from "react";
import { NewsList } from "../../components/NewsList";

export const dynamic = "force-dynamic";

async function NewsFetcher() {
  // During build, return empty array to prevent hanging
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return <NewsList items={[]} />;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/news`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const items = await res.json();
    return <NewsList items={items} />;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return <NewsList items={[]} />;
  }
}

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Latest News from Burkina Faso</h1>
      <Suspense fallback={<p className="text-black/70">Loading news…</p>}>
        {/* Async Server Component is allowed inside Suspense in Next.js */}
        <NewsFetcher />
      </Suspense>
      <p className="text-xs text-black/50">Sources: AIB, LeFaso.net, Sidwaya</p>
    </div>
  );
}
