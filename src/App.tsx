import React from "react";
import logo from "./logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

interface IFormInputs {
  firstName: string;
  email: string;
}

const schema = yup
  .object({
    firstName: yup.string().required("O nome é obrigatório").required("O nome é obrigatório"),
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obigatório"),
  })
  .required();

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  function Onsubmit(userData: any) {
    console.log(userData);
  }
  return (
    <>
      <div className="App">
        <img src={logo} height="80" alt="" />
        <div className="formulario">
          <form onSubmit={handleSubmit(Onsubmit)}>
            <label className="person-info">
              Nome
              <input type="text" {...register("firstName")} />
              <span>{errors.firstName?.message}</span>
            </label>
            <label className="person-info">
              E-mail
              <input type="text" {...register("email")} />
              <span>{errors.email?.message}</span>
            </label>
            <label className="office">
              Qual o seu atual cargo?
              <select className="cargo">
                <option disabled selected value="selecione">
                  selecione
                </option>
                <option value="Junior">Junior</option>
                <option value="Pleno">Pleno</option>
                <option value="Senior">Senior</option>
                <option value="Tech-Lead">Tech-Lead</option>
              </select>
            </label>
            <div className="area-button">
              <button type="submit">Enviar Dados</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
