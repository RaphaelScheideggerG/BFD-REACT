import React, { useState } from 'react';             // (1) Importa React e o Hook useState para gerenciamento de estado

export default function Button({ valor }) {          // (2) Define um Function Component chamado Button
                                                     //     Recebe a prop "valor", que define o texto inicial do botão

  const [texto, setTexto] = useState(valor);         // (3) Cria um estado "texto" inicializado com o valor da prop
                                                     //     "setTexto" é a função usada para atualizar esse estado

  function handleClick() {                           // (4) Função chamada quando o botão é clicado
    setTexto("Você clicou!");                        // (5) Atualiza o estado "texto", mudando o conteúdo do botão
  }

  return (                                           // (6) Retorno JSX
    <button onClick={handleClick}>
      {texto}
    </button>                                        // (9) Fim do botão
  );                                                 // (10) Fim do return
}                                                    // (11) Fim do componente
