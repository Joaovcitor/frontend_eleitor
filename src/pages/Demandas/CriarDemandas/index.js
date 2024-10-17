import React, { useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";

import { toast } from "react-toastify";
import { get } from "lodash";
import { isEmail } from "validator";
import { Container } from "../../../styles/GlobalStyle";
import { Form } from "./styled";

export default function Login() {
  const [descricao_demanda, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmepassword, setConfirmarSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [cras, setCras] = useState("");
  const [territorio, setTerritorio] = useState("");


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post("/supervisor/cadastrar-visitador", {
        name,
        password,
        email,
        cpf,
        confirmepassword,
        cras,
        territorio
      });

      toast.success("Visitador cadastrado com sucesso!");
      history.push("/");
    } catch (e) {
      const errors = get(e, "response.data.errors", "");
      if (typeof errors === "string") {
        toast.error(errors);
      } else if (Array.isArray(errors)) {
        errors.forEach((error) => {
          toast.error(error);
        });
      } else if (typeof errors === "object") {
        Object.values(errors).forEach((error) => {
          if (typeof error === "string") {
            toast.error(error);
          }
        });
      }
    }
  }

  return (
    <Container>
      <h2>Cadastrar nova demanda</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Descrição:
          <textarea
            value={descricao_demanda}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Status:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
