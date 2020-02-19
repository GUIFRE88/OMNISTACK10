import React from 'react';

// Importações de styles
import './global.css'
import './App.css'
import './SideBar.css'
import './Main.css'

// Componente -> É um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade -> Informações que um componente PAI passa para o componente FILHO. 
// Estado -> Informações mantidas pelo componente. (Lembrar: imutabilidade)

  // Cria estado para aplicação
  // counter - Variavel com valor
  // setCounter - Função para alterar o valor e assim identificando que alterou o estado e o react atualizar a tela. 
 // const [counter, setCounter] = useState(0)

function App() {

  return (
    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnlogias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36928790?s=460&amp;v=4" alt="Guilherme Freudenburg"/>
              <div className="user-info">
                <strong>Guilherme Freudenburg</strong>
                <span>ReactJS, NodeJs, React Native</span>
              </div>
            </header>
            <p>Teste de Biografia do GitHub  CTO da FredsDevs</p>
            <a href="https://github.com/GUIFRE88">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36928790?s=460&amp;v=4" alt="Guilherme Freudenburg"/>
              <div className="user-info">
                <strong>Guilherme Freudenburg</strong>
                <span>ReactJS, NodeJs, React Native</span>
              </div>
            </header>
            <p>Teste de Biografia do GitHub  CTO da FredsDevs</p>
            <a href="https://github.com/GUIFRE88">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36928790?s=460&amp;v=4" alt="Guilherme Freudenburg"/>
              <div className="user-info">
                <strong>Guilherme Freudenburg</strong>
                <span>ReactJS, NodeJs, React Native</span>
              </div>
            </header>
            <p>Teste de Biografia do GitHub  CTO da FredsDevs</p>
            <a href="https://github.com/GUIFRE88">Acessar perfil no GitHub</a>
          </li>

        </ul>
      </main>

    </div>
  );
}

export default App;
