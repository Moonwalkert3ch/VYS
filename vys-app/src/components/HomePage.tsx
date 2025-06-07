

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center text-center p-4">
     
        {/* Search Bar Row */}
        <div className="w-full max-w-screen-md flex flex-row items-center gap-4 mt-4 px-4">
            {/* Main Search Box */}
            <div className="flex items-center bg-white text-gray-500 rounded-full px-4 py-2 flex-grow">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                />
            </svg>
            <input
                type="text"
                placeholder="What are you searching for?"
                className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
            />
            </div>

            {/* Zip Code + Go */}
            <div className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Enter zip code"
                className="rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-24"
            />
            <button className="bg-[#A1C9FF] text-indigo-950 font-semibold px-4 py-2 rounded-md hover:bg-[#45132F] hover:text-[#A1C9FF] transition">
                Go
            </button>
            </div>
        </div>
    

    </main>
  );
}