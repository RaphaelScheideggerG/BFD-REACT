import Labelln from './Labelln.jsx';
import Label from './label.jsx';
import Button from './Button.jsx';
import InputText from './InputText.jsx';

export default function Login() {
  return (
    <>
      <Labelln texto="Login" />
      <Label texto="Usuário: " />
      <InputText placeholder="user..." /> <br />
      <Label texto="Senha: " />
      <InputText placeholder="password..." /> <br />
      <Button valor="Logar" />
      <Button valor="Cadastrar" />
    </>
  );
}
