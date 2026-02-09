function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-orange-600">
            🍽️ Recipe Sharing Platform
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome to our community recipe sharing platform
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Setup Complete! ✅
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">
                React application created successfully
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">
                Tailwind CSS installed and configured
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">
                Tailwind directives added to CSS
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-500 text-xl">ⓘ</span>
              <span className="text-gray-700">
                Check the requirements below match what you see:
              </span>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Requirements from image.png:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>README.md exists and is not empty</li>
                <li>Files are present</li>
                <li>Tailwind CSS installed</li>
                <li>Tailwind CSS configuration</li>
                <li>Tailwind CSS inclusion</li>
              </ul>
            </div>

            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition duration-200 shadow-md">
              Continue to Task 1 →
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            Recipe Sharing Platform • Built with React & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Task 0: Project Setup Complete
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
