import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Task 2: Styled UserProfile Component
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This component demonstrates the application of Tailwind CSS utility
            classes to style a React component according to specific design
            requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main styled component */}
          <div className="col-span-full md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-2">
            <UserProfile />
          </div>

          {/* Additional examples for demonstration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Styling Requirements Applied:
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Container: bg-gray-100, p-8, max-w-sm, mx-auto, my-20,
                rounded-lg, shadow-lg
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Image: rounded-full, w-36, h-36, mx-auto
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                Heading: text-xl, text-blue-800, my-4
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                Paragraph: text-gray-600, text-base
              </li>
            </ul>
          </div>

          {/* Explanation card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Component Details:
            </h2>
            <div className="space-y-3 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800">
                  Component Location:
                </h3>
                <code className="text-sm bg-gray-100 p-1 rounded">
                  src/components/UserProfile.jsx
                </code>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Imported in:</h3>
                <code className="text-sm bg-gray-100 p-1 rounded">
                  src/App.jsx
                </code>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Responsive Design:
                </h3>
                <p>
                  The component uses Tailwind's responsive classes to maintain
                  proper layout across different screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
