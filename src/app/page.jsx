export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-beige-50 text-gray-900 font-sans">
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
          Një dritare elegante për punë fleksibël dhe bashkëpunime.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Lidh profesionistët me projektet që kanë kuptim.  
          Postime të verifikuara, profile me stil dhe filtrime të zgjuara.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Krijo profil
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">
            Ofro punë
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700 mt-20">
          <div className="p-6 bg-white shadow-sm rounded-2xl">
            <h3 className="font-semibold mb-2 text-lg">Moderim manual</h3>
            <p>Çdo postim kalon verifikim për të garantuar cilësi dhe siguri.</p>
          </div>

          <div className="p-6 bg-white shadow-sm rounded-2xl">
            <h3 className="font-semibold mb-2 text-lg">Profile me CV</h3>
            <p>Krijo profile që shfaqin aftësitë dhe eksperiencat e tua.</p>
          </div>

          <div className="p-6 bg-white shadow-sm rounded-2xl">
            <h3 className="font-semibold mb-2 text-lg">Filtra inteligjentë</h3>
            <p>Filtra për orar, pagesë, vendndodhje dhe kategori pune.</p>
          </div>
        </div>

        <footer className="mt-24 text-sm text-gray-500">
          © {new Date().getFullYear()} Akord.al — platformë për punë fleksibël me stil.
        </footer>
      </section>
    </main>
  );
}
