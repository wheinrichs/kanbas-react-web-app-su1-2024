import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }

  };
  return (
    <div>
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      <input onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} className="form-control mb-2" placeholder="username" />
      <input onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />
      <button onClick={signin} className="btn btn-primary w-100"> Sign in </button>
      <br />
      <Link to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  );
}