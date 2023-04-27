import Table from './components/table'
import './App.css'
import { pokedata } from './data';

function App() {

  return (
    <>
      <Table rows={[pokedata]}/> 
    </>
  )
}

export default App
