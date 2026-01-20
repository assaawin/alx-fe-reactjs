import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id),
  );

  const handleGenerateRecommendations = () => {
    generateRecommendations();
  };

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h2>My Favorite Recipes</h2>
        <button
          onClick={handleGenerateRecommendations}
          className="btn-recommend"
        >
          Generate Recommendations
        </button>
      </div>

      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        <div className="favorites-grid">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card favorite-card">
              <div className="card-header">
                <h3>{recipe.title}</h3>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="btn-remove-favorite"
                  title="Remove from favorites"
                >
                  ❤️
                </button>
              </div>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="btn-view">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
