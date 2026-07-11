import Parser from "rss-parser";
import { RSS_FEEDS } from "../../../lib/news";

// Use the newer revalidation configuration for App Router
export const dynamic = "force-dynamic";
export const revalidate = 3600; // revalidate each hour

export async function GET() {
  // During build, return empty array to prevent hanging
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return new Response(JSON.stringify([]), {
      headers: { "content-type": "application/json" },
    });
  }

  const parser = new Parser();
  const items: {
    title: string;
    link: string;
    isoDate?: string;
    source?: string;
  }[] = [];

  await Promise.all(
    RSS_FEEDS.map(async ({ url, source }) => {
      try {
        const feed = await parser.parseURL(url);
        for (const item of feed.items.slice(0, 10)) {
          items.push({
            title: item.title ?? "Untitled",
            link: item.link ?? "#",
            isoDate: item.isoDate,
            source,
          });
        }
      } catch (err) {
        console.error("Failed to parse feed", url, err);
      }
    })
  );

  items.sort((a, b) => {
    const tA = a.isoDate ? new Date(a.isoDate).getTime() : 0;
    const tB = b.isoDate ? new Date(b.isoDate).getTime() : 0;
    return tB - tA;
  });

  return new Response(JSON.stringify(items.slice(0, 30)), {
    headers: { "content-type": "application/json" },
  });
}
