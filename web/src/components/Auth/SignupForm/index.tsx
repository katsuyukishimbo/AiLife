import React, { useState } from "react"
import styles from "./style.module.css"
import "tailwindcss/tailwind.css"
import apiClient from "../../../api/apiClient"
import { useNavigate } from "react-router-dom"

// interface SignupProps {
//   onSignup: (email: string, password: string) => void
// }

// const SignupForm: React.FC<SignupProps> = ({ onSignup }) => {

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await apiClient.post("/auth/signup", { email, password })
      console.log(response.data)
      // ここでアクセストークンを保存し、他のページにリダイレクトするなどの処理を行います。
    } catch (error) {
      console.error(error)
      // エラー処理を行います。
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm
