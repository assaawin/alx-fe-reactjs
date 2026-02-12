import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Preparation steps are required';
    
    // Optional: Check at least 2 ingredients (split by new line)
    const ingredientList = formData.ingredients.trim().split('\n').filter(line => line.trim() !== '');
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please add at least 2 ingredients (one per line)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // For now, log to console (you can later connect to state or backend)
      console.log('New Recipe Submitted:', {
        ...formData,
        ingredients: formData.ingredients.trim().split('\n').filter(line => line.trim() !== ''),
        instructions: formData.instructions.trim().split('\n').filter(line => line.trim() !== '')
      });
      
      setSubmitted(true);
      
      // Reset form and redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Share a New Recipe</h1>
          <p className="text-gray-600 mb-10">Fill in the details below to add your recipe to the platform.</p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">Recipe Submitted Successfully!</h2>
              <p className="text-gray-600">Thank you! Redirecting to home page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipe Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g. Classic Pancakes"
                />
                {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
              </div>

              {/* Ingredients */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ingredients <span className="text-gray-500 text-xs">(one per line)</span>
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-5 py-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-mono text-sm ${
                    errors.ingredients ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="2 cups flour&#10;1 cup milk&#10;2 eggs&#10;..."
                />
                {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
              </div>

              {/* Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preparation Steps <span className="text-gray-500 text-xs">(one step per line)</span>
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows="8"
                  className={`w-full px-5 py-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                    errors.instructions ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Mix dry ingredients together&#10;Add wet ingredients and stir until smooth&#10;..."
                />
                {errors.instructions && <p className="text-red-500 text-sm mt-2">{errors.instructions}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all active:scale-95"
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
