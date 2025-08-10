export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/60">
      <div className="container-responsive py-8 text-sm flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
        <p className="text-black/70">© {new Date().getFullYear()} Burkina Faso Diaspora</p>
        <p className="text-black/70">Built with ❤️ in flag colors: <span className="text-burkina-red">Red</span>, <span className="text-burkina-green">Green</span>, <span className="text-burkina-gold">Gold</span></p>
      </div>
    </footer>
  )
}
