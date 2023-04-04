import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-container">
      <Link to="/auth"> Giriş Yap </Link>
      <Link to="/auth/register"> Kayıt Ol </Link>
      Auth layout
      <hr />
    </div>
  );
}

export default AuthLayout;
