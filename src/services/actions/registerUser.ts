import Swal from "sweetalert2";
import { api } from "..";
import { TFormSchema } from "../../types";

export const registerUser = (userData: TFormSchema) => {
  api
    .post("/posts", userData)
    .then((response) => {
      Swal.fire({
        icon:"success",
        title:"sucesso",
        text:"Cadastro realizado com sucesso"
      })
    })
    .catch((error) => {
      console.log(error.data);
      Swal.fire({
        icon:"error",
        title:"erro inesperado",
        text:"Erro no cadastro"
      })
    });
};
