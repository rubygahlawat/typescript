import AddToDo from './components/AddToDo'
import Navbar from './components/Navbar'
import ToDosList from './components/ToDosList'

const App = () => {
  return (
    <main>
      {/* <h1>TODO REACT + TYPESCRIPT</h1> */}
      <Navbar />
      <AddToDo />
      <ToDosList />
    </main>
  )
}

export default App