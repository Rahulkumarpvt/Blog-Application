import { useState } from "react";
const apiURL = import.meta.env.VITE_API_URL;

export default function RegisterPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch(`${apiURL}/register`, {
      method: "Post",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successful");
    } else {
      alert("Registration Failed");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
