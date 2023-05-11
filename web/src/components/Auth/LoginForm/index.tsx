import React, { useState } from "react"
import styles from "./style.module.css"
import "tailwindcss/tailwind.css"
import apiClient from "../../../api/apiClient"
import { useNavigate } from "react-router-dom"

// interface LoginProps {
//   onLogin: (email: string, password: string) => void
// }

// const LoginForm: React.FC<LoginProps> = ({ onLogin }) => {
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await apiClient.post("/auth/login", { email, password })
      console.log(response.data)

      navigate("/home")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-4 max-w-md">
      <h2 className="text-center mb-8">Login</h2>
      <label htmlFor="email" className="text-2xl font-bold">
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300"
      />
      <label htmlFor="password" className="text-2xl font-bold">
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-8 rounded-lg border border-gray-300"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
