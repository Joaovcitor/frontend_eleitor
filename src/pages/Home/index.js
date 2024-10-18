import React, { useEffect, useState } from "react";
import { Form, Div, Section, Organizador, Links } from './styled';
import { MdAccountCircle, MdDiversity3, MdOutlineReceiptLong } from "react-icons/md"
import axios from "../../services/axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import * as actions from "../../store/modules/auth/actions"
import { toast } from "react-toastify";

export default function Home() {
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/demandas/todas-as-demandas");
        if (response.data.length === 0) {
          setDemandas([]);
        } else {
          setDemandas(response.data.demandas)
        }
      } catch (e) {
        toast.error("Ocorreu um erro ao carregar as demandas")
      }
      // console.log(response.data)
    }
    getData()
  }, [])
  return (
    <Organizador>
      <Div>
        <nav>
          <MdDiversity3 size={40}></MdDiversity3>
          <h4>Eleitores <span></span></h4>
          <Links>Acessar</Links>
          <Links>Cadastrar novo eleitor</Links>
        </nav>
        <nav>
          <MdAccountCircle size={40} />
          <h4>Lideranças Politicas</h4>
          <Links>Acessar</Links>
          <Links>Cadastrar nova liderança</Links>
        </nav>
        <nav>
          <MdOutlineReceiptLong size={40}></MdOutlineReceiptLong>
          <h4>Demandas</h4>
          <Links to="/demandas">Acessar</Links>
          <Links to="/criar-demanda">Criar nova Demanda</Links>
        </nav>
      </Div>
      <Section>
        <div>
          <p>Demandas Pendentes - antigas</p>
        </div>
        <div>
          <p>Eleitores que fazem aniversário esse mês</p>
        </div>
      </Section>
    </Organizador>
  );
}
