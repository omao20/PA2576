import React, { useState } from "react";
import "./pages.css";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "jakob@hotmail.com" && password === "jakob" && role === "admin") {
      setLoggedIn(true);
      setEmail("");
      setPassword("");
      setRole("user");
      alert("User login successful!");
    } else if (email === "omar@hotmail.com" && password === "omar" && role === "user") {
      setLoggedIn(true);
      setEmail("");
      setPassword("");
      setRole("user");
      alert("User login successful!");
    } else {
      alert("Wrong username or password!");
    }
  };


  if (loggedIn) {
    document.location.href = `/`
  }

  return (
    <form onSubmit={handleLogin} className="form-container">

      <label>
        Role:
        <select value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
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



      <button type="submit">Log in</button>
      <a href="/sign">Create account</a>
    </form>
  );
}



export default Login;