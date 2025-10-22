import React, { useState } from 'react';                // (1) Importa React e o Hook useState para estados locais

export default function InputPassword({ placeholder }) {// (2) Define o componente funcional InputPassword
                                                        //     Recebe a prop "placeholder" para exibir dica no campo

  const [senha, setSenha] = useState("");               // (3) Estado "senha" inicializado como string vazia

  function handleChange(e) {                            // (4) Função chamada quando o usuário digita no campo
    setSenha(e.target.value);                           // (5) Atualiza o estado "senha" com o valor digitado
  }

  return (                                              // (6) Retorno JSX do componente
    <>
      <input                                            // (8) Campo de entrada
        type="password"                                 // (9) Tipo "password": oculta caracteres digitados
        placeholder={placeholder}                       // (10) Texto de dica dinâmico
        value={senha}                                   // (11) Valor do input controlado pelo estado "senha"
        onChange={handleChange}                         // (12) Evento disparado a cada alteração
      />
      { (senha !== "") && <p>Senha digitada: {senha}</p>}
    </>                                                 // (14) Fim do fragmento
  );                                                    // (15) Fim do return
}                                                       // (16) Fim do componente
