import { useMemo, useState } from "react";
import { UserShortInterface } from "data/@types/userInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/apiServices";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);
  const [erro, setErro] = useState("");
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
  const [diaristasRestantes, setDiariastasRestantes] = useState(0);

  async function getProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace("/D/g", ""));
      setDiaristas(data.diaristas);
      setDiariastasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não encontrado!");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    getProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
