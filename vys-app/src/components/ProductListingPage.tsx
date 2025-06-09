
export default function ProductListingPage() {
  return (
    <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center justify-start px-4 pt-10 sm:pt-16 md:pt-20">
      {/* Placeholder for Product Listings */}
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Product Listings</h1>
        <p className="text-lg text-center mb-4">Explore our collection of secondhand items.</p>
        {/* Placeholder for product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {/* Example Product Card */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-700 mb-4">Short description of the product.</p>
            <button className="bg-[#052958] text-[#A1C9FF] font-semibold px-4 py-2 rounded-md hover:bg-[#45132F] transition">
              View Details
            </button>
          </div>
          {/* Repeat for more products */}
        </div>
      </div>
    </main>
  );
}
