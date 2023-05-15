import React from "react"
import { useNavigate } from "react-router-dom"

const MenuHistory: React.FC = () => {
  const navigate = useNavigate()

  // APIからデータを取得するための仮のデータ
  const menuHistory = [
    {
      id: 1,
      date: "2023-05-10",
      menu: [
        { id: 1, title: "Recipe 1" },
        { id: 2, title: "Recipe 2" },
      ],
    },
    {
      id: 2,
      date: "2023-05-11",
      menu: [
        { id: 3, title: "Recipe 3" },
        { id: 4, title: "Recipe 4" },
      ],
    },
  ]

  const handleBackClick = () => {
    navigate("/menu-suggestion")
  }

  const handleMenuClick = (id: number) => {
    // 詳細ページへの遷移を実装
    console.log(`Show menu detail with ID: ${id}`)
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">献立履歴</h1>
      <ul>
        {menuHistory.map((historyItem) => (
          <li key={historyItem.id}>
            <div>
              <h2>{historyItem.date}</h2>
              <ul>
                {historyItem.menu.map((recipe) => (
                  <li key={recipe.id}>
                    <button onClick={() => handleMenuClick(recipe.id)}>
                      {recipe.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleBackClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Menu Suggestion
      </button>
    </div>
  )
}

export default MenuHistory
