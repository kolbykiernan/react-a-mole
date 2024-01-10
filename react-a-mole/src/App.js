import './App.css';


//allowing us to change the state of variables, like the score, and the display for our mole.
//imports the mole container component, shown in line 18
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

//main function to run all callbacks, the first thing we define is the score, this will technically be defined in MoleContainer.js on line 18. 
function App() {
  let [score, setScore] = useState(0)

  //creating this function to allow us to push our MoleContainer to the hills. The for loop allows this to be pushed to all nine hills without setting them up individually. Each one will have their own key which will allow us to beeter identify the hill and keep score.
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
    hills.push(
      <MoleContainer 
      key = {i} 
      setScore = {setScore} 
      score = {score}
      />
    )
  }

  //creating this return value, so that we can push the mole container to each of the iterable nine holes
  return (
    <div className="App">
      {hills}
    </div>
  )
  }

  //our ultimate user display that schows the title, the score, and creatMoleHill, which encompasses the gamified portion
  return (
    <div className="App">
      <h1> React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  )
}

export default App;
