import { StrictMode } from 'react'                 // (1) Importa StrictMode do React, usado para checar boas práticas em dev
import { createRoot } from 'react-dom/client'      // (2) Importa createRoot (React 18+) para inicializar a aplicação
import './index.css'                               // (3) Importa o CSS global da aplicação (estilos básicos)
import App from './App.jsx'                        // (4) Importa o componente raiz App, que contém a lógica principal da UI

createRoot(document.getElementById('root'))        // (5) Cria a "raiz" do React, ligada ao <div id="root"> no index.html
  .render(                                         
    <StrictMode>                                   
      <App />                                      
    </StrictMode>,
  )
