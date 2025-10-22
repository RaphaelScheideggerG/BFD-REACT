import React from 'react';                          // (1) Importa a biblioteca React (necessário para componentes de classe)

export default class Labelln extends React.Component { // (2) Declaração do componente Labelln como classe
                                                       //     Herdando de React.Component

  constructor(props) {                               // (3) Construtor da classe: recebe as props
    super(props);                                    // (4) Chama o construtor da superclasse (obrigatório)
    // o state inicializa com o valor vindo da prop
    this.state = {                                   // (5) Define o estado inicial do componente
      valor: props.texto                             // (6) O estado "valor" recebe o valor da prop "texto"
    };
  }

  render() {                                         // (7) Método obrigatório de classe: define o que será exibido
    return (                                         // (8) Início do retorno JSX
      <>                                             
        {this.state.valor} <br/>                     
      </>                                            
    );                                               
  }
}