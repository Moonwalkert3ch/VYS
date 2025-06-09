

export default function UploadImagePage() {
    return (
        <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center text-center p-4 pb-32">
            <div className="w-full max-w-screen-lg flex flex-col items-center gap-4 mt-4 px-4">
                <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
                <div className="bg-gray-300 w-full aspect-square max-w-md flex flex-col items-center justify-center rounded-md">
                    <span className="text-black font-medium">Drag and drop an image here or click to select</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Supported formats: JPG, PNG, GIF</p>
            </div>
        </main>
    );
}
