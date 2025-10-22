import React, { useState } from 'react';                // (1) Importa React e o Hook useState para estados locais

export default function InputText({ placeholder }) {    // (2) Define um Function Component chamado InputText
                                                        //     Recebe a prop placeholder para exibir dica no campo

  const [valor, setValor] = useState("");               // (3) Estado "valor" inicializado vazio
  const [erro, setErro] = useState(false);              // (4) Estado "erro" inicializado como false (sem erro)

  function handleChange(e) {                            // (5) Função chamada sempre que o usuário digita no campo
    const novoValor = e.target.value;                   // (6) Captura o valor digitado
    setValor(novoValor);                                // (7) Atualiza o estado "valor"

    // verifica se está vazio
    setErro(novoValor.trim() === "");                   // (8) Se vazio → ativa o estado de erro (true), senão false
  }

  return (                                              // (9) Retorno JSX do componente
    <>
      <input                                            // (11) Campo de texto controlado
        type="text"                                     // (12) Tipo texto
        placeholder={placeholder}                       // (13) Texto de dica dinâmico
        value={valor}                                   // (14) Valor do input controlado pelo estado "valor"
        onChange={handleChange}                         // (15) Evento disparado a cada digitação
      />
      {erro && <p>⚠️ O campo não pode ficar vazio.</p>}
    </>                                                 // (17) Fim do fragmento
  );                                                    // (18) Fim do return
}                                                       // (19) Fim do componente InputText
