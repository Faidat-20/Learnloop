function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-6 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-primary">LearnLoop</div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-primary">Features</a>
        <a href="#" className="hover:text-primary">Pricing</a>
        <a href="#" className="hover:text-primary">How it works</a>
        <a href="#" className="hover:text-primary">Communities</a>
      </div>

      <button className="border border-primary rounded-lg px-5 py-2 text-sm font-medium text-primary hover:bg-bg-light">
        Log In
      </button>
    </nav>
  )
}

export default Navbar