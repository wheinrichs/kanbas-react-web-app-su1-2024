import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const signup = async () => {
    await client.signup(user);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div>
      <h1>Sign up</h1>
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
             className="form-control mb-2" placeholder="password" />
      <button onClick={signup} className="btn btn-primary mb-2"> Sign up </button><br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
