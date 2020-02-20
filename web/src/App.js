import React, { useState, useEffect } from 'react';
//useEffect - Dispara função toda vez que um valor for alterado. 

// Importações de styles
import './global.css'
import './App.css'
import './SideBar.css'
import './Main.css'

// Importa a conexão com a API.
import api from './services/api'

// Importa o componente.
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

// Componente -> É um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade -> Informações que um componente PAI passa para o componente FILHO. 
// Estado -> Informações mantidas pelo componente. (Lembrar: imutabilidade)

  // Cria estado para aplicação
  // counter - Variavel com valor
  // setCounter - Função para alterar o valor e assim identificando que alterou o estado e o react atualizar a tela. 
 // const [counter, setCounter] = useState(0)

function App() {

  // Cria variaveis com estado para setar os valores. 
  const [devs, setDevs] = useState([])

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs') // Busca a api get/devs

      setDevs(response.data) // Seta todos os dados que vieram da api

    }
    loadDevs() // Chama função para executar através do useEffect
  }, [])

  // Função do Botão Submit
  // e -> Representa o evento.
  async function handleAddDev(data){

    const reponse = await api.post('/devs',data)
   
     // Copia todos os devs ja existentes na variavel e adiciona o que está em tela.
    // Desta forma atualizará a tela.
    setDevs([...devs, reponse.data])

  }

  return (
    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
          < DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          
          {devs.map( dev => (
            < DevItem key={dev._id} dev={dev}/>
          ))}
      
        </ul>
      </main>

    </div>
  );
}

export default App;
