import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import styles from "./css/home.module.css";
import { Navbar } from "../components/navbar";

type User = {
  name: string;
  email: string;
  picture: string;
};

export function Home() {
  const [user, setUser] = useState<User | null>(null);

  function login(credentialResponse: { credential?: string }) {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<User>(credentialResponse.credential);
      setUser(decoded);
    }
  }

  function logout() {
    googleLogout();
    setUser(null);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      
      <Navbar />

      {!user ? (
        <div className={styles.loginContainer}>

          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>

          <h1>Bem-vindo ao nosso projeto!</h1>

          <p className={styles.subtitle}>
            Faça login com sua conta Google para acessar o sistema
          </p>

          <div className={styles.googleButton}>
            <GoogleLogin
              onSuccess={login}
              onError={() => console.error("Login falhou")}
            />
          </div>

        </div>
      ) : (
        <div className={styles.userInfo}>
          <h2>Bem-vindo, {user.name}!</h2>

          <img
            src={user.picture}
            alt="Perfil"
            className={styles.profilePicture}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />

          <p>Email: {user.email}</p>

          <button onClick={logout} className={styles.logoutButton}>
            Sair
          </button>
        </div>
      )}

    </div>
  );
}
