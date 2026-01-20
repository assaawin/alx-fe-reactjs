import { useParams, Link, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId),
  );
  const isFavorite = useRecipeStore((state) => state.isFavorite(recipeId));
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found</h2>
        <Link to="/" className="btn-back">
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <button onClick={handleFavoriteToggle} className="btn-favorite">
            {isFavorite ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
          </button>
          <Link to={`/edit/${recipe.id}`} className="btn-edit">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn-delete">
            Delete
          </button>
        </div>
      </div>

      <p className="recipe-description">{recipe.description}</p>

      <div className="recipe-meta">
        <span>Created: {new Date(recipe.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="recipe-content">
        <section className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="instructions">
          <h3>Instructions</h3>
          <div style={{ whiteSpace: "pre-line" }}>{recipe.instructions}</div>
        </section>
      </div>

      <Link to="/" className="btn-back">
        ← Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;
