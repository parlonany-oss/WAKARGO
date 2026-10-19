function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Navbar placeholder */}
      <nav className="border-b border-border px-8 py-4 flex items-center justify-between">
<img src="/wakargo-logo.png" alt="WAKARGO" className="h-32 w-auto" />
        <span className="text-sm text-muted font-display font-medium">
          Shipping Happiness to Your Doorstep
        </span>
      </nav>

      {/* Design system test */}
      <main className="container-pad py-16 space-y-8">
        <div>
          <p className="section-label">Design System</p>
          <h1 className="section-title">WAKARGO is Live 🚢</h1>
          <p className="section-sub">
            React + Vite + Tailwind is wired. Brand colors, fonts, and utility classes are ready.
            Components go in from here.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button className="btn-primary">Get a Quote</button>
          <button className="btn-secondary">Track Shipment</button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg">
          <div className="h-16 rounded-md bg-brand flex items-center justify-center text-white text-xs font-display font-bold">#550637</div>
          <div className="h-16 rounded-md bg-accent flex items-center justify-center text-white text-xs font-display font-bold">#d88b2e</div>
          <div className="h-16 rounded-md bg-offwhite border border-border flex items-center justify-center text-gray-500 text-xs font-display font-bold">#fdf6f0</div>
        </div>
      </main>
    </div>
  )
}

export default App