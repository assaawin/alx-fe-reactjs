import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Recipe title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!instructions.trim()) newErrors.instructions = 'Preparation steps are required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('New Recipe:', { title, ingredients, instructions });
      setSubmitted(true);
      setTimeout(() => navigate('/'), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Share a New Recipe</h1>

          {submitted ? (
            <div className="text-center py-12">
              <p className="text-6xl mb-4">🎉</p>
              <h2 className="text-2xl font-semibold text-emerald-600">Recipe Submitted Successfully!</h2>
              <p className="text-gray-600 mt-3">Redirecting to homepage...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter recipe title"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Ingredients */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Ingredients (one per line)</label>
                <textarea
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  rows="6"
                  className={`w-full px-5 py-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono ${
                    errors.ingredients ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="2 cups flour&#10;1 tsp salt&#10;..."
                />
                {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
              </div>

              {/* Instructions */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preparation Steps (one per line)</label>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows="8"
                  className={`w-full px-5 py-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.instructions ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Mix all dry ingredients&#10;Add wet ingredients..."
                />
                {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl text-lg transition-colors"
              >
                Submit Recipe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
