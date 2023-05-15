import React from "react"
import { useNavigate } from "react-router-dom"

interface CategoryRecipesProps {
  // 必要に応じてプロパティを追加
}

const CategoryRecipes: React.FC<CategoryRecipesProps> = () => {
  const navigate = useNavigate()

  // APIからデータを取得するための仮のデータ
  const recipes = [
    { id: 1, title: "Recipe 1" },
    { id: 2, title: "Recipe 2" },
    { id: 3, title: "Recipe 3" },
  ]

  const handleBackClick = () => {
    navigate("/menu-suggestion")
  }

  const handleRecipeClick = (id: number) => {
    // レシピ詳細ページへの遷移を実装
    console.log(`Show recipe detail with ID: ${id}`)
  }

  return (
    <div>
      <h1>Category Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <button onClick={() => handleRecipeClick(recipe.id)}>
              {recipe.title}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleBackClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Menu Suggestion
      </button>
    </div>
  )
}

export default CategoryRecipes
