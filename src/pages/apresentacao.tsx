import styles from "./css/apresentacao.module.css";
import { Navbar } from "../components/navbar"; 

export function Apresentacao() {
  return (
    <div className={styles.apresentacao}>

      <Navbar />

      <section className={styles.equipe}>
        <h2>Equipe Desenvolvedora</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/img/lc.jpg" alt="Luccas" className={styles.avatar}/>
            <h3>Luccas Gabriel Rodrigues Moreira dos Reis</h3>
            <p className={styles.role}>Desenvolvedor FULL STACK</p>
            <hr />
            <p>Estudante do 4º período de Engenharia de Software.</p>
            <p>
            Possui interesse em UX/UI e experiência com React, TypeScript, CSS, JavaScript e C++.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/img/jm.jpg" alt="Jorge" className={styles.avatar}/>
            <h3>Jorge Miguel de Oliveira Benedito</h3>
            <p className={styles.role}>Desenvolvedor FULL STACK</p>
            <hr />
            <p>Estudante do 4º período de Engenharia de Software.</p>
            <p>
            Possui interesse em banco de dados e experiência com React, TypeScript, CSS, JavaScript e C++.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
