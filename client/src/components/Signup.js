import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../utils/resource";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
      //console.log(email, username, password);
      handleRegister(email, username, password, navigate);
      setPassword("");
      setUsername("");
      setEmail("");
    }
  };

  return (
    <main className="signup">
      <form className="signup__form" onSubmit={handleSubmit}>
        <h2 className="signup__title">Create an Account</h2>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          required
          onChange={(val) => setEmail(val.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          required
          type="text"
          value={username}
          onChange={(val) => setUsername(val.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(val) => setPassword(val.target.value)}
        />
        <button className="signupButton">Register</button>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Already have an account?{" "}
          <Link className="link" to="/">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}
