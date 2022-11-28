import React from "react";
import logo from "./logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

interface IFormInputs {
  User: string;
  WorkYears: number;
  email: string;
  select: string;
  myRadio: [];
}

const schema = yup
  .object({
    User: yup.string().required("O nome é obrigatório").required("O nome é obrigatório !"),
    WorkYears: yup.number().positive("insira seu tempo de experiência !").integer().required("insira seu tempo de experiência !"),
    email: yup.string().email("Digite um e-mail válido").required("O e-mail é obigatório !"),
    select: yup.string().required("selecione uma opção !"),
    myRadio: yup.array().min(1, "Selecione ao menos uma opção").nullable().required("Selecione ao menos uma opção"),
  })
  .required();

export function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const data = [
    { text: "ReactJs", value: "ReactJs", id: 1 },
    { text: "Javascript", value: "Javascript", id: 2 },
    { text: "Typescript", value: "Typescript", id: 3 },
    { text: "CSS", value: "CSS", id: 4 },
    { text: "Sass", value: "Sass", id: 5 },
    { text: "Less", value: "Less", id: 6 },
  ];

  function Onsubmit(userData: any) {
    console.log(userData);
  }
  return (
    <>
      <div className="App">
        <div className="logo">
          <p>Dev Forms</p>
          <img src={logo} height="80" alt="" />
        </div>
        <div className="formulario">
          <form onSubmit={handleSubmit(Onsubmit)}>
            <label className="person-info">
              <p>Nome</p>
              <input type="text" minLength={4} {...register("User")} />
              <span className="errors">{errors.User?.message}</span>
            </label>
            <label className="person-info">
              <p>Anos na área?</p>
              <input
                type="number"
                {...register("WorkYears", {
                  setValueAs: (value) => {
                    const maybeNumber = parseInt(value, 10);
                    return isNaN(maybeNumber) ? 0 : maybeNumber;
                  },
                })}
              />
              <span className="errors">{errors.WorkYears?.message}</span>
            </label>
            <label className="person-info">
              <p>E-mail</p>
              <input type="text" {...register("email")} />
              <span className="errors">{errors.email?.message}</span>
            </label>
            <div className="office">
              <p className="person-info">Qual o seu cargo ?</p>
              <select {...register("select")}>
                <option value=""></option>
                <option value="Junior">Junior</option>
                <option value="Pleno">Pleno</option>
                <option value="Senior">Senior</option>
                <option value="Tech-Lead">Tech-Lead</option>
              </select>
              <span className="errors">{errors.select?.message}</span>
            </div>
            <div className="box-multi-options">
              <p className="text-options">Quais linguagens você conhece ?</p>
              {data.map(({ id, text, value }) => (
                <div key={id} className="multi-options">
                  <input type="checkbox" value={value} {...register("myRadio")} />
                  <p>{text}</p>
                </div>
              ))}
              <span className="errors">{errors.myRadio?.message}</span>
            </div>
            <div className="area-button">
              <button type="submit">Enviar Dados</button>
              <button type="submit" onClick={() => reset()}>
                Limpar Dados
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
