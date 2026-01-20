import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "./components/recipeStore";
import "./App.css";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Initialize with some sample recipes
    const sampleRecipes = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        ingredients: [
          "Spaghetti",
          "Eggs",
          "Pancetta",
          "Parmesan",
          "Black Pepper",
        ],
        instructions:
          "1. Cook spaghetti al dente\n2. Whisk eggs with grated Parmesan\n3. Cook pancetta until crispy\n4. Mix everything together off heat\n5. Season with black pepper",
        createdAt: "2024-01-20",
      },
      {
        id: 2,
        title: "Chicken Curry",
        description: "Spicy Indian chicken curry",
        ingredients: [
          "Chicken",
          "Curry Powder",
          "Onions",
          "Tomatoes",
          "Coconut Milk",
        ],
        instructions:
          "1. Sauté onions until golden\n2. Add chicken and brown\n3. Stir in curry powder\n4. Add tomatoes and coconut milk\n5. Simmer for 30 minutes",
        createdAt: "2024-01-19",
      },
      {
        id: 3,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy chocolate chip cookies",
        ingredients: [
          "Flour",
          "Butter",
          "Brown Sugar",
          "Chocolate Chips",
          "Egg",
          "Vanilla",
        ],
        instructions:
          "1. Cream butter and sugars\n2. Add egg and vanilla\n3. Mix in flour\n4. Fold in chocolate chips\n5. Bake at 350°F for 10-12 minutes",
        createdAt: "2024-01-18",
      },
      {
        id: 4,
        title: "Caesar Salad",
        description: "Fresh and crispy Caesar salad",
        ingredients: [
          "Romaine Lettuce",
          "Croutons",
          "Parmesan",
          "Caesar Dressing",
          "Anchovies",
        ],
        instructions:
          "1. Wash and chop romaine lettuce\n2. Add croutons and parmesan\n3. Toss with Caesar dressing\n4. Top with anchovies",
        createdAt: "2024-01-17",
      },
      {
        id: 5,
        title: "Beef Tacos",
        description: "Mexican style beef tacos",
        ingredients: [
          "Ground Beef",
          "Taco Shells",
          "Lettuce",
          "Tomatoes",
          "Cheese",
          "Sour Cream",
        ],
        instructions:
          "1. Cook ground beef with taco seasoning\n2. Warm taco shells\n3. Fill shells with beef\n4. Add toppings",
        createdAt: "2024-01-16",
      },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🍽️ Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Recipe</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <SearchBar />
                  <div className="main-content">
                    <div className="content-left">
                      <RecipeList />
                    </div>
                    <div className="content-right">
                      <RecommendationsList />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
