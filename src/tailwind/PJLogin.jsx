import React from "react";

import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";

function PJLogin() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-80">
        <LabelTitle texto="Pessoa Jurídica" />

        <div className="mb-4 flex flex-col">
          <Label texto="Nome:" />
          <InputPassword placeholder="name..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="CNPJ:" />
          <InputPassword placeholder="CNPJ..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Email:" />
          <InputPassword placeholder="email..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Endereço:" />
          <InputPassword placeholder="Logradouro..." />
          <InputPassword placeholder="Cep..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Telefone:" />
          <div class="flex ...">  <div class="w-1/5 ..."><InputPassword placeholder="DDD..."/></div>  <div class="w-4/5 ..."><InputPassword placeholder="Numero..."/></div></div>

        </div>

        <Button valor="Logar" />
      </form>
    </div>
  );
}
export default PJLogin;