import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from "./components/Auth/LoginForm"
import SignupForm from "./components/Auth/SignupForm"
import ProfileSettings from "./components/ProfileSettings"
import MenuSuggestion from "./components/MenuSuggestion"
import MenuHistory from "./components/MenuHistory"
import CategoryList from "./components/CategoryList"
import IngredientList from "./components/IngredientList"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/menu-suggestion" element={<MenuSuggestion />} />
        <Route path="/menu-history" element={<MenuHistory />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route path="/ingredient-list" element={<IngredientList />} />
        {/* 他のルートもここに追加 */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
