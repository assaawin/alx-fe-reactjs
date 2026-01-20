import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // CHECK THIS

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // CHECK THIS
      navigate("/");
    }
  };

  return (
    <button onClick={handleDelete} className="btn-delete">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
