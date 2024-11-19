
import './App.css'
import CardAna from './components/Devs/CardAna'
import CardMarcio from './components/Devs/CardMarcio'
import CardMarllon from './components/Devs/CardMarllon'
import CardOtoniel from './components/Devs/CardOtoniel'
import CardRafael from './components/Devs/CardRafael'
import CardRobert from './components/Devs/CardRobert'
import CardFlavio from './components/Ouvinte/CardFlavio'
import CardRubens from './components/Ouvinte/CardRubens'
import CardWillian from './components/Ouvinte/CardWillian'

export default function App() {
  
  return (
    <div >
      <div>
      <h1>Atividade em Equipe com Github</h1>
      <h2>Devs</h2>
      </div>
      <div className='main'>
        <CardOtoniel/>

        <CardMarllon/>

        <CardRafael/>

        <CardMarcio/>

        <CardRobert/>

        <CardAna/>
      </div>
      <h2>Ouvintes</h2>

      <div className='main'>
        <CardFlavio/>
        <CardRubens/>
        <CardWillian/>

      </div>
      
      
    </div>
  )
}

