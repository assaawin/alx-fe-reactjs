import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const recipes = useRecipeStore((state) => state.recipes);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h3>Recommendations</h3>
        <p>
          No recommendations yet. Add some favorites to get personalized
          suggestions!
        </p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h3>Recommended for You</h3>
      <div className="recommendations-grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="recipe-card recommendation-card">
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
            <div className="card-actions">
              <Link to={`/recipe/${recipe.id}`} className="btn-view-small">
                View
              </Link>
              <button
                onClick={() => addFavorite(recipe.id)}
                className="btn-favorite-small"
                title="Add to favorites"
              >
                🤍
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
