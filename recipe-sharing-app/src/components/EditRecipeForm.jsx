import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId),
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setIngredients(recipe.ingredients?.join(", ") || "");
      setInstructions(recipe.instructions || "");
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, {
      title,
      description,
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      instructions,
    });
    navigate(`/recipe/${recipeId}`);
  };

  if (!recipe) {
    return (
      <div className="edit-recipe-form">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/")} className="btn-back">
          ← Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short Description"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma-separated)"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Cooking Instructions"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit">Update Recipe</button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
