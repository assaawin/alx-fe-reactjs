import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    import("../data.json").then((data) => {
      setRecipes(data.default);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              🍳 Recipe Sharing Platform
            </h1>
            <p className="text-xl text-emerald-100">
              Discover, share, and cook amazing recipes
            </p>
          </div>

          <a
            href="/add-recipe"
            className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-2xl text-lg transition-all flex items-center gap-3 shadow-lg"
          >
            <span className="text-2xl">+</span>
            Add New Recipe
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Featured Recipes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {recipe.summary}
                </p>

                <Link
                  to={`/recipe/${recipe.id}`}
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl text-center transition-colors"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
