import React from "react"
import { useNavigate } from "react-router-dom"

interface IngredientListProps {
  // 必要に応じてプロパティを追加
}

const IngredientList: React.FC<IngredientListProps> = () => {
  const navigate = useNavigate()

  // APIからデータを取得するための仮のデータ
  const ingredients = [
    { id: 1, name: "Ingredient 1" },
    { id: 2, name: "Ingredient 2" },
    { id: 3, name: "Ingredient 3" },
  ]

  const handleBackClick = () => {
    navigate("/menu-suggestion")
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">食材リスト</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
      <button
        onClick={handleBackClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Menu Suggestion
      </button>
    </div>
  )
}

export default IngredientList
