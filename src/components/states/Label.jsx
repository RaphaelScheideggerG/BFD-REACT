import React, {useState} from 'react';           // (1) Importa React e o Hook useState para gerenciar estados no componente

export default function Label({ texto }) {       // (2) Define um Function Component chamado Label
                                                 //     Recebe a prop "texto" por desestruturação
  // cria um estado inicializado com a prop "texto"
  const [valor, setValor] = useState(texto);     // (3) Hook useState cria a variável "valor" e a função "setValor"
                                                 //     O estado inicial de "valor" é o valor recebido em "texto"
  return (
    <>
      {valor}
    </>
  );
}
