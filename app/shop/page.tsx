'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products as catalog, type Product } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function ShopPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const total = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = catalog.find((p) => p.id === id);
      return sum + (product ? product.price * qty : 0);
    }, 0);
  }, [cart]);

  function addToCart(product: Product) {
    setCart((c) => ({ ...c, [product.id]: (c[product.id] ?? 0) + 1 }));
  }

  function clearCart() {
    setCart({});
  }

  const itemsInCart = Object.keys(cart).length;

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              Shop
            </h1>
            <p className="text-lg text-black/70 max-w-2xl">
              A curated collection celebrating Burkina Faso&apos;s craftsmanship and
              creativity. From handwoven Faso Dan Fani to artisan accessories — every
              item carries a piece of home. Demo cart only; full marketplace coming soon.
            </p>
          </div>
          <div className="card p-4 min-w-[240px] shrink-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Cart</span>
              <span className="text-burkina-red font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-black/60">{itemsInCart} item(s)</p>
            <div className="mt-3 flex gap-2">
              <button
                className="btn-primary flex-1"
                onClick={() =>
                  alert(
                    'Checkout will be available when we launch the full marketplace with Stripe/PayPal integration. Stay tuned!'
                  )
                }
              >
                Checkout
              </button>
              <button
                className="inline-flex items-center px-3 py-2 text-sm rounded-md border border-black/10 hover:bg-black/5 transition-colors"
                onClick={clearCart}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </section>

      {/* Marketplace CTA */}
      <section className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🇧🇫 A Marketplace for Burkinabé Artisans
        </h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">
          Our vision is a full marketplace where Burkinabé artisans and designers — from
          Ouagadougou to the diaspora — can sell directly to a global community. Faso Dan
          Fani weavers, bronze casters, leather workers, and contemporary designers: this
          platform is being built with you in mind. Join to stay updated on the launch.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/signup"
            className="inline-block bg-white text-burkina-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/signup"
            className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Sell Your Products
          </Link>
        </div>
      </section>

      {/* Attribution */}
      <p className="text-xs text-black/40 text-center">
        Product images are placeholders. Full artisan profiles, authentic product photography,
        and direct-from-maker shipping coming with the marketplace launch. Interested in being
        one of our first vendors?{' '}
        <Link href="/signup" className="text-burkina-green underline">
          Sign up
        </Link>
        .
      </p>
    </div>
  );
}
