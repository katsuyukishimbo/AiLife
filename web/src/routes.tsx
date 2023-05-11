import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from "./components/Auth/LoginForm"
import SignupForm from "./components/Auth/SignupForm"
import ProfileSettings from "./components/ProfileSettings"
import MenuSuggestion from "./components/MenuSuggestion"
// import Home from "./components/Home"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/menu-suggestion" element={<MenuSuggestion />} />
        {/* 他のルートもここに追加 */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
