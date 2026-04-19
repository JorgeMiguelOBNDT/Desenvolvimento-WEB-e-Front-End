import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import styles from "./css/home.module.css";
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
  picture: string;
};

export function Home() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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

  return (
    
    <div className= {styles.container}>
      {!user ? (
        <GoogleLogin
          onSuccess={login}
          onError={() => console.error("Login falhou")}
        />
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

            <button
              onClick={() => navigate("/cadastro")} className={styles.navButtons}> Cadastro
            </button>

            <button
              onClick={() => navigate("/apresentacao")} className={styles.navButtons}> Apresentação
            </button>

          <button onClick={logout} className={styles.logoutButton}>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}