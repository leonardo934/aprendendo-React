import './styles.css'

import { Card } from '../../components/Card'

function handleNameChange(name){
  console.log(name)
} 

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      
      <input type="text" placeholder="Digite o nome..."  onChange={e => handleNameChange(e.target.value)}/>
      <button type="button">Adicionar</button>

      <Card name="Leonardo" time="21:26:25"/>
      <Card name="Nicoli" time="03:28:49"/>

    </div >
  );
}
