import React from "react"
import { Link } from "react-router-dom"

interface RecipeCardProps {
  id: number
  name: string
  imageUrl: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, name, imageUrl }) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className="block w-full max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div
        className="bg-cover bg-center h-56"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
    </Link>
  )
}

export default RecipeCard
