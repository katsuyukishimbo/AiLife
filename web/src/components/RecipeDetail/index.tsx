import React from "react"
import { useNavigate } from "react-router-dom"

interface RecipeDetailProps {
  id: number
  name: string
  imageUrl: string
}

const RecipeDetail: React.FC<RecipeDetailProps> = () => {
  // const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // APIからデータを取得するための仮のデータ
  const recipe = {
    id: 1,
    title: "Delicious Recipe",
    image: "https://example.com/image.jpg",
    ingredients: [
      { name: "ingredient1", amount: "100g" },
      { name: "ingredient2", amount: "200g" },
    ],
    steps: ["Step 1: Do something...", "Step 2: Do something else..."],
  }

  const handleBackClick = () => {
    navigate("/menu-suggestion")
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount}
          </li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <button
        onClick={handleBackClick}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Menu Suggestion
      </button>
    </div>
  )
}

export default RecipeDetail
