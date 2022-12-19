import Welcome from './components/Apresentacao';
import Contador from './components/Contador'
import Passarela from './components/Passarela'

import './styles/index.css'

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Welcome />
      <Contador />
      <Passarela />
    </div>
  )
}