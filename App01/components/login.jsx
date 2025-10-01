import Labelln from '../componentes/Labelln.jsx';
import Label from '../componentes/label.jsx';
import Button from '../componentes/Button.jsx';
import InputText from '../componentes/InputText.jsx';

function Login() {
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

export default Login;