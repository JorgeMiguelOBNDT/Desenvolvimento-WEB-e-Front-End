import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <p className={styles.disciplina}>
        Desenvolvimento WEB e Front-End
      </p>

      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cadastro"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }
        >
          Cadastro
        </NavLink>

        <NavLink
          to="/apresentacao"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink
          }
        >
          Apresentação
        </NavLink>
      </div>

    </nav>
  );
}
