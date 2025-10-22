import Label from "./Label.jsx"                       // (1) Importa o componente Label para exibir rótulos de campos
import Labelln from "./Labelln.jsx"                   // (2) Importa o componente Labelln para exibir o título "Login"
import Button from "./Button.jsx"                     // (3) Importa o componente Button para o botão de ação
import InputText from "./InputText.jsx"               // (4) Importa o componente InputText (campo de texto controlado)
import InputPassword from "./InputPassword.jsx"       // (5) Importa o componente InputPassword (campo de senha controlado)

function Login() {

  return (
    <>
      <Labelln texto="Login"/>
      <Label texto="Usuário: "/>
      <InputText placeholder="user..."/> <br />
      <Label texto="Senha: "/>
      <InputPassword placeholder="password..."/> <br />
      <Button valor="Logar" />
    </>
  )
}

export default Login
