import React from "react";

import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputDate from "./InputDate.jsx";
import List from "./List.jsx";

function PJLogin() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-80">
        <LabelTitle texto="Pessoa Jurídica" />

        <div className="mb-4 flex flex-col">
          <Label texto="Nome:" />
          <InputText placeholder="name..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="CNPJ:" />
          <InputText placeholder="CNPJ..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Email:" />
          <InputText placeholder="email..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Endereço:" />
          <InputText placeholder="Logradouro..." />
          <InputText placeholder="Cep..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Telefone:" />
          <div className="flex ...">  <div className="w-1/5 ..."><InputText placeholder="DDD..."/></div>  <div className="w-4/5 ..."><InputText placeholder="Numero..."/></div></div>

        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Inscrição Estadual:" />
          <label texto="Data:"/>
          <InputText placeholder="Numero..." />
          <List></List>
          <InputDate datelabel="Data de Registro"/>
        </div>

        <Button valor="Logar" />
      </form>
    </div>
  );
}
export default PJLogin;