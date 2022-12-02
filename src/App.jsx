import './styles/index.css'
import Passarela from './components/Passarela'
import Contador from './components/Contador'

export default function App() {
  let condicional = false
  return (
    <div>
      {condicional ? <Contador /> : <Passarela />}
    </div>
  )
}