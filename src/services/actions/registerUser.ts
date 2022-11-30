import { api } from "..";
import { TFormSchema } from "../../types";

export const registerUser = (userData: TFormSchema) => {
  api
    .post("/posts", userData)
    .then((response) => {
      alert("Cadastro Realizado com Sucesso");
    })
    .catch((error) => {
      console.log(error.data);
      alert("Erro ao cadastrar");
    });
};
