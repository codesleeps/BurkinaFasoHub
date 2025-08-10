import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Burkina Faso Diaspora',
  description: 'Networking, information, culture, education, technology, news, and a small shop for the Burkina Faso diaspora.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-responsive py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
