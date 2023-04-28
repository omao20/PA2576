import React, { useState } from "react";
import { loginUser } from "../apiManager";
import "./pages.css";
import Cookies from "universal-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await loginUser(email, password);
    if(res) {
        const cookie = new Cookies();
        cookie.set("user", res.data)
        
        console.log(cookie.get("user"))
    }
  }

//   const sendLogin = async () => {
//     console.log(email, password)
//     const res = await loginUser(email, password);
//     console.log(res)
//   }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
