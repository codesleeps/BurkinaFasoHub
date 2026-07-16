export type Product = {
  id: string
  name: string
  description: string
  price: number
  image?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Flag Pride Tee',
    description:
      'A comfortable cotton tee in red, green, and gold — the colors of our flag. Wear your Burkinabé pride wherever you go. Unisex fit.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1520975922284-87e4c0a7fa3c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Faso Dan Fani Cloth',
    description:
      'Handwoven cotton fabric in the Faso Dan Fani tradition — the woven cloth of the homeland. Striped patterns in bold earth tones. Each piece is unique, made by artisans in Burkina Faso. Approx. 2 metres.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Handcrafted Bronze Bracelet',
    description:
      'A bracelet cast using the lost-wax technique, a centuries-old tradition of Burkinabé bronze artisans. Lightweight and adjustable. Each piece carries the mark of the maker\'s hand.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1544816135-5d31d559e30d?q=80&w=1200&auto=format&fit=crop',
  },
]
