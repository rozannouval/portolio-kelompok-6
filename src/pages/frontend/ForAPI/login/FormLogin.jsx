import React, { useState } from "react";
import Login from "./Login.jsx";

const FormLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <p>Selamat datang, Anda telah berhasil login!</p>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default FormLogin;
