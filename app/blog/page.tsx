"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NewsList } from "../../components/NewsList";

type NewsItem = {
  title: string;
  link: string;
  isoDate?: string;
  source?: string;
};

export default function BlogPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.aib.media/feed/"
        );
        if (res.ok) {
          const data = await res.json();
          const mapped = (data.items || []).slice(0, 15).map((item: any) => ({
            title: item.title,
            link: item.link,
            isoDate: item.pubDate,
            source: "AIB",
          }));
          setItems(mapped);
        }
      } catch {
        setError("Unable to load news right now. Check back soon.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          News from Burkina Faso
        </h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Stay informed about what&apos;s happening at home. We pull headlines from trusted
          Burkinabé news sources — Agence d&apos;Information du Burkina (AIB), LeFaso.net,
          and Sidwaya — so you never lose touch with the stories that shape our country.
        </p>
      </section>

      {/* News feed */}
      <section>
        {loading && (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="card p-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p className="text-yellow-800 font-medium">{error}</p>
            <p className="text-sm text-black/50 mt-2">
              In the meantime, you can visit these sources directly:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm">
              <a
                href="https://www.aib.media"
                className="text-burkina-green underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                AIB
              </a>
              <span className="text-black/30">·</span>
              <a
                href="https://lefaso.net"
                className="text-burkina-green underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeFaso.net
              </a>
              <span className="text-black/30">·</span>
              <a
                href="https://www.sidwaya.info"
                className="text-burkina-green underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sidwaya
              </a>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            <NewsList items={items} />
            <p className="text-xs text-black/40 mt-3">
              News updates automatically from AIB. Additional sources coming soon.
            </p>
          </>
        )}
      </section>

      {/* Community news CTA */}
      <section className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🇧🇫 Share News That Matters
        </h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">
          Know of a diaspora event, a community achievement, or a story the headlines
          missed? We are building a community-submitted news section. Every voice adds
          to the picture of Burkina Faso the world sees.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.aib.media"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-burkina-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            Visit AIB
          </a>
          <Link
            href="/signup"
            className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Submit a Story
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-xs text-black/40 pt-2">
        Sources: AIB (Agence d&apos;Information du Burkina), LeFaso.net, Sidwaya.
        Headlines are automatically aggregated and update throughout the day.
        Content belongs to respective publishers.
      </p>
    </div>
  );
}
