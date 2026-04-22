import { useState, useEffect } from "react";
import styles from "./css/cadastro.module.css";
import { Navbar } from "../components/navbar";

type User = {
  name: string;
  email: string;
  picture: string;
};

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  matricula: string;
};

export function Cadastro() {
  const [user, setUser] = useState<User | null>(null);

  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    matricula: "",
  });

  const [jsonOutput, setJsonOutput] = useState<FormData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erro ao ler usuário do localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        nome: user.name,
        email: user.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    const savedCadastro = localStorage.getItem("cadastro");

    if (savedCadastro) {
      try {
        const parsed = JSON.parse(savedCadastro);

        setForm(parsed);
        setJsonOutput(parsed);
      } catch (error) {
        console.error("Erro ao carregar cadastro salvo", error);
      }
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const json: FormData = {
      nome: form.nome,
      email: form.email,
      telefone: form.telefone,
      matricula: form.matricula,
    };

    console.log("JSON gerado:", json);

    setJsonOutput(json);

    localStorage.setItem("cadastro", JSON.stringify(json));

    alert("Cadastro realizado!");
  }

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.title}>Cadastro de Usuário</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Matrícula</label>
              <input
                type="text"
                name="matricula"
                value={form.matricula}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.button}>
              Finalizar Cadastro
            </button>
          </form>

          {jsonOutput && (
            <div className={styles.jsonBox}>
              <h3>JSON gerado:</h3>
              <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
