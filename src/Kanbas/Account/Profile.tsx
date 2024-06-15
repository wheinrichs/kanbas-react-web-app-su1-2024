import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }

  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div className="d-flex flex-column">
          <input
            className="form-control m-1"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            className="form-control m-1"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            className="form-control m-1"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            className="form-control m-1"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            className="form-control m-1"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            className="form-control m-1"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="form-select m-1"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>{" "}
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
