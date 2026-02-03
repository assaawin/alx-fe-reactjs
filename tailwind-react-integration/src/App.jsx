import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            Task 3: Responsive UserProfile Component
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-2xl mx-auto">
            This component demonstrates responsive design using Tailwind CSS
            utility classes. Resize your browser or use device emulation to see
            how the component adapts to different screen sizes.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Responsive component display */}
          <div className="flex flex-col items-center">
            <div className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 bg-blue-100 rounded-lg">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                Responsive UserProfile Component
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-blue-700">
                Watch how the component changes at different breakpoints:
              </p>
            </div>
            <UserProfile />
          </div>

          {/* Responsive breakpoints explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Mobile (sm) */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border-l-4 border-red-500">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-2">
                📱 Mobile (Small)
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3">
                Screens smaller than 640px
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
                  Padding: p-4
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
                  Max-width: max-w-xs
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
                  Image: w-24 h-24
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
                  Heading: text-lg
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1 mr-2"></span>
                  Paragraph: text-sm
                </li>
              </ul>
            </div>

            {/* Tablet (md) */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border-l-4 border-yellow-500">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-2">
                📟 Tablet (Medium)
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3">
                Screens 768px and larger
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                  Padding: md:p-8
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                  Max-width: md:max-w-sm
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                  Image: md:w-36 md:h-36
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                  Heading: md:text-xl
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                  Paragraph: md:text-base
                </li>
              </ul>
            </div>

            {/* Desktop (lg+) */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border-l-4 border-green-500">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-2">
                💻 Desktop (Large+)
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3">
                Screens 1024px and larger
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
                  Maintains tablet styles
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
                  Centered layout
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
                  Optimal reading width
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></span>
                  Enhanced visual hierarchy
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Test Instructions */}
          <div className="mt-6 sm:mt-8 md:mt-10 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-3">
              How to Test Responsive Design
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-medium text-blue-700 mb-2">
                  Browser Developer Tools:
                </h4>
                <ol className="text-xs sm:text-sm text-blue-600 space-y-1 pl-4 list-decimal">
                  <li>Right-click and select "Inspect"</li>
                  <li>Click the device toggle icon (📱)</li>
                  <li>Choose different device presets</li>
                  <li>Resize the viewport manually</li>
                </ol>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-medium text-blue-700 mb-2">
                  Observe These Changes:
                </h4>
                <ul className="text-xs sm:text-sm text-blue-600 space-y-1 pl-4 list-disc">
                  <li>Container padding and max-width</li>
                  <li>Image size changes</li>
                  <li>Typography scaling</li>
                  <li>Layout adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
