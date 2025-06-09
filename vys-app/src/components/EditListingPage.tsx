

export default function EditListingPage() {
  return (
    <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32 items-center">
      {/* Header */}
      <div className="relative w-full max-w-screen-md flex items-center justify-center h-12 mt-4 mb-6">
        <h1 className="text-2xl font-bold text-center">Edit Listing</h1>
      </div>

      {/* Form for Editing Listing */}
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
          <input type="text" id="title" className="w-full p-2 bg-gray-700 text-white rounded" placeholder="Enter listing title" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
          <textarea id="description" rows={4} className="w-full p-2 bg-gray-700 text-white rounded" placeholder="Enter listing description"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-2">Price</label>
          <input type="number" id="price" className="w-full p-2 bg-gray-700 text-white rounded" placeholder="Enter price" />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white">Save Changes</button>
      </form>
    </main>
  );
}
// This component serves as the Edit Listing page for the application.