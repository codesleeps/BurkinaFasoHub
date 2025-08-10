'use client'

import { useMemo, useState } from 'react'
import { products as catalog, type Product } from '../../data/products'
import { ProductCard } from '../../components/ProductCard'

export default function ShopPage() {
  const [cart, setCart] = useState<Record<string, number>>({})

  const total = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = catalog.find((p) => p.id === id)
      return sum + (product ? product.price * qty : 0)
    }, 0)
  }, [cart])

  function addToCart(product: Product) {
    setCart((c) => ({ ...c, [product.id]: (c[product.id] ?? 0) + 1 }))
  }

  function clearCart() {
    setCart({})
  }

  const itemsInCart = Object.keys(cart).length

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-black/70">Curated items (max 30). Demo cart only.</p>
        </div>
        <div className="card p-4 min-w-[240px]">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Cart</span>
            <span className="text-burkina-red font-bold">${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-black/60">{itemsInCart} item(s)</p>
          <div className="mt-3 flex gap-2">
            <button className="btn-primary flex-1" onClick={() => alert('Checkout flow to be integrated (Stripe/PayPal)')}>Checkout</button>
            <button className="inline-flex items-center px-3 py-2 text-sm rounded-md border border-black/10 hover:bg-black/5" onClick={clearCart}>Clear</button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  )
}
