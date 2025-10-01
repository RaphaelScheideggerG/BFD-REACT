import "./Cadastro.css";
import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";

function Cadastro() {
  return (
    <div className="cadastro-container">
      <form className="cadastro-form">
        <LabelTitle texto="Cadastro" />

        <div className="cadastro-group">
          <Label texto="Usuário:" />
          <InputText placeholder="user..." />
        </div>

        <div className="cadastro-group">
          <Label texto="Senha:" />
          <InputPassword placeholder="password..." />
        </div>
        <div className="cadastro-group">
          <Label texto="Confirmação:" />
          <InputPassword placeholder="Confirm Password..." />
        </div>

        <Button valor="Cadastrar" />
      </form>
    </div>
  );
}

export default Cadastro;