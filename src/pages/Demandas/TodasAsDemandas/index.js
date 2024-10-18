import React, { useEffect, useState } from "react";
import { Organizador, Links } from './styled';
import axios from "../../../services/axios"

import { toast } from "react-toastify";

export default function Home() {
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/demandas/todas-as-demandas");
        console.log(response.data)
        if (response.data.length === 0) {
          setDemandas([]);
        } else {
          setDemandas(response.data.demandas)
        }
      } catch (e) {
        console.log(e)
        toast.error("Ocorreu um erro ao carregar as demandas")
      }
    }
    getData()
  }, [])
  return (
    <Organizador>
      {demandas.map(demanda => (
        <nav key={demanda.id}>
          <p>Descrição:</p>
          <p>{demanda.descricao_demanda}</p>
          <p>Status: {demanda.status}</p>
          <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
        </nav>
      ))}
    </Organizador>
  );
}
