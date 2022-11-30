import * as yup from "yup";

export const schema = yup
  .object({
    User: yup.string().required("O nome é obrigatório").required("O nome é obrigatório !"),
    WorkYears: yup.number().positive("insira seu tempo de experiência !").integer().required("insira seu tempo de experiência !"),
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obigatório !"),
    select: yup.string().required("selecione uma opção !"),
    myRadio: yup.array().min(1, "Selecione ao menos uma opção").nullable().required("Selecione ao menos uma opção"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 digitos!").required("A senha é obrigatória"),
    Confirmpassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();
