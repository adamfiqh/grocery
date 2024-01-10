// src/UserProfile.js
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const UserProfile = ({ user }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Profil Pengguna</span>
        <p>Nama: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
