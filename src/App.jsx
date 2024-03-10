import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('Button Clicked')
  }

  const handleClick2 = () => {
    alert('button 2 Clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <> 
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Clicked Item') }}>Thirds</button>
      {/* Problematic Things */}
      <button onClick={() => addToFive(5)}>Click To Add</button>
    </>
  )
}

export default App
