import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      title,
      description,
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      instructions,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h2>Add New Recipe</h2>
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
        <button type="submit">Add Recipe</button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
