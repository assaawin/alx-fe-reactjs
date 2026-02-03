import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Task 4: Interactive UserProfile Component
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This component demonstrates interactive hover effects and smooth
            transitions using Tailwind CSS. Hover over different elements to see
            the effects.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Interactive component */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Interactive Demo
              </h2>
              <p className="text-gray-600 mb-4">
                Hover over the following elements to see effects:
              </p>
              <UserProfile />
            </div>
          </div>

          {/* Effects explanation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Applied Hover Effects
              </h2>

              <div className="space-y-6">
                {/* Profile Image Effect */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Profile Image Hover
                  </h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
                      <span className="text-sm">Hover</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">
                        <code className="text-sm bg-blue-50 px-2 py-1 rounded">
                          hover:scale-110
                        </code>
                      </p>
                      <p className="text-gray-600 mb-1">
                        <code className="text-sm bg-blue-50 px-2 py-1 rounded">
                          transition-transform
                        </code>
                      </p>
                      <p className="text-gray-600 mb-1">
                        <code className="text-sm bg-blue-50 px-2 py-1 rounded">
                          duration-300
                        </code>
                      </p>
                      <p className="text-gray-600">
                        <code className="text-sm bg-blue-50 px-2 py-1 rounded">
                          ease-in-out
                        </code>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heading Effect */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Heading Color Change
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-medium text-blue-800 hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer">
                      Hover over me
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">
                        <code className="text-sm bg-green-50 px-2 py-1 rounded">
                          hover:text-blue-500
                        </code>
                      </p>
                      <p className="text-gray-600">
                        <code className="text-sm bg-green-50 px-2 py-1 rounded">
                          transition-colors
                        </code>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Shadow Effect */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Enhanced Card Shadow
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-20 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center cursor-pointer">
                      <span className="text-sm">Hover me</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">
                        <code className="text-sm bg-purple-50 px-2 py-1 rounded">
                          hover:shadow-xl
                        </code>
                      </p>
                      <p className="text-gray-600">
                        <code className="text-sm bg-purple-50 px-2 py-1 rounded">
                          transition-shadow
                        </code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition timing chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Transition Timing
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">duration-300</span>
                    <span className="text-sm text-gray-600">300ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">ease-in-out</span>
                    <span className="text-sm text-gray-600">
                      Slow start & end
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 relative">
                    <div className="absolute top-0 left-0 w-full h-2 flex">
                      <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Expected Interactions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Image Hover:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Slight scale increase (110%)</li>
                <li>• Smooth transformation</li>
                <li>• 300ms duration</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Heading Hover:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Color change to blue-500</li>
                <li>• Smooth color transition</li>
                <li>• 300ms duration</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">Card Hover:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Enhanced shadow (shadow-xl)</li>
                <li>• Smooth shadow transition</li>
                <li>• Lifting effect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
