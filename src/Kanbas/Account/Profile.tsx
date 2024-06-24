import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      console.log("Fetched profile:", account);
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };
  const dispatch = useDispatch();

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  const saveProfile = async () => {
    try {
      const updatedProfile = await client.updateProfile(profile);
      console.log("Updated profile:", updatedProfile); // Log updated profile
      setProfile(updatedProfile);
      navigate("/Kanbas/Dashboard");
    } catch (err: any) {
      console.error("Error updating profile:", err); // Log error
    }
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <input value={profile.username}  onChange={(e) => setProfile({ ...profile, username:  e.target.value })} className=" form-control mb-2" />
          <input value={profile.password}  onChange={(e) => setProfile({ ...profile, password:  e.target.value })} className=" form-control mb-2"/>
          <input value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} className=" form-control mb-2"placeholder="Enter your First Name"/>
          <input value={profile.lastName}  onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })} className=" form-control mb-2"placeholder="Enter your Last Name"/>
          <input value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" className=" form-control mb-2"/>
          <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className=" form-control mb-2" placeholder="Enter your email"/>
          <select value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })} className=" form-control mb-2">
            <option value="USER">USER</option>            
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
            <option value="STUDENT">STUDENT</option>
          </select>
          <button onClick={saveProfile} className="btn btn-primary w-100 mb-2">Save</button>
        </div>
      )}
    <button onClick={signout} className="btn btn-danger w-100">
    Sign out
    </button>
    </div>
  );
}
