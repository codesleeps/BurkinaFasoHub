import Image from 'next/image'
import type { Product } from '../data/products'

export function ProductCard({ product, onAdd }: { product: Product, onAdd: (p: Product) => void }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-40 w-full bg-black/5">
        {product.image && (
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        )}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="font-bold text-burkina-red">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-black/70">{product.description}</p>
        <button className="btn-primary" onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  )
}
