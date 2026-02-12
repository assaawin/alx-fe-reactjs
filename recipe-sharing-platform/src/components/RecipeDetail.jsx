import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    import('../data.json').then((data) => {
      const foundRecipe = data.default.find(r => r.id === parseInt(id));
      setRecipe(foundRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div className="min-h-screen flex items-center justify-center">Loading recipe...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{recipe.title}</h1>
            <p className="text-gray-600 text-lg mb-10">{recipe.summary}</p>

            {/* Ingredients */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6">Ingredients</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.ingredients.map((item, index) => (
                  <li key={index} className="flex items-start bg-gray-50 p-4 rounded-2xl">
                    <span className="text-emerald-600 mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6">Instructions</h2>
              <div className="space-y-8">
                {recipe.instructions.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-2">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
