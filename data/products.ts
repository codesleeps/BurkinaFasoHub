export type Product = {
  id: string
  name: string
  description: string
  price: number
  image?: string
}

export const products: Product[] = [
  { id: '1', name: 'Flag T-Shirt', description: 'Comfortable tee with Burkina Faso flag', price: 19.99, image: 'https://images.unsplash.com/photo-1520975922284-87e4c0a7fa3c?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', name: 'Traditional Fabric', description: 'Authentic Faso Dan Fani cloth', price: 49.99, image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop' },
  { id: '3', name: 'Handmade Bracelet', description: 'Locally crafted bracelet', price: 14.99, image: 'https://images.unsplash.com/photo-1544816135-5d31d559e30d?q=80&w=1200&auto=format&fit=crop' },
]
