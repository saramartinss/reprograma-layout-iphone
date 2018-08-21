import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gols1: 0,
      gols2: 0
    }
  }
  
  incrementar = numero => {
    let novoState = {};
    novoState[`gols${numero}`] = this.state[`gols${numero}`] + 1;
    this.setState(novoState);
  }

  atualizar = () =>{
    this.setState({
      gols1: 0,
      gols2: 0
    });
  }
  
  render() {
    return (
      <div>
        <div className="controles">
          <input type="text" placeholder="Digite o nome do time da casa" />
          <input type="text" placeholder="Digite o nome do time visitante" />
          <button onClick={this.atualizar}>Zerar placar</button>
        </div>
        <div className="placar">
          <PlacarTime numero="1" gols={this.state.gols1} nomeTime="Corinthians" funcaoBotao={this.incrementar} />
          X
          <PlacarTime numero="2" gols={this.state.gols2}nomeTime="Chapecoense" funcaoBotao={this.incrementar} visitante="true"/>
        </div>
      </div>
    );
  }
}

export default App;