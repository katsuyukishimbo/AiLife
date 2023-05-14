import React, { useState } from "react"
import styles from "./style.module.css"
import "tailwindcss/tailwind.css"
// import apiClient from "../../../api/apiClient"
import { useNavigate } from "react-router-dom"
import RecipeCard from "../RecipeCard"

interface MenuItem {
  id: number
  name: string
  imageUrl: string
}

const sampleMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Sample Dish 1",
    imageUrl: "https://example.com/chicken-curry.jpg",
  },
  {
    id: 2,
    name: "Sample Dish 2",
    imageUrl: "https://example.com/chicken-curry.jpg",
  },
  {
    id: 3,
    name: "Sample Dish 3",
    imageUrl: "https://example.com/chicken-curry.jpg",
  },
]

const MenuSuggestion: React.FC = () => {
  const [menuItems, setMenuItems] = useState(sampleMenuItems)
  const navigate = useNavigate()

  const goToRecipeDetail = (id: number) => {
    // history.push(`/recipe/${id}`)
    navigate("/home")
  }

  const goToMenuHistory = () => {
    navigate("/menu-history")
  }

  const goToCategoryList = () => {
    navigate("/category-list")
  }

  const goToProfileSettings = () => {
    navigate("/profile-settings")
  }

  const goToIngredientList = () => {
    navigate("/ingredient-list")
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">献立提案</h1>
      <ul className="divide-y divide-gray-200">
        {menuItems.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </ul>
      <div className="flex justify-around mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={goToMenuHistory}
        >
          Menu History
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={goToCategoryList}
        >
          Category List
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={goToProfileSettings}
        >
          Profile Settings
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={goToIngredientList}
        >
          Ingredient List
        </button>
      </div>
    </div>
  )
}

export default MenuSuggestion
