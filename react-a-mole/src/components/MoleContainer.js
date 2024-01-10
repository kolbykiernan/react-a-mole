//importing Mole and EmptySlot components, along with allowing us change the state of a variable, in this case displaying the mole
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

// A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
const MoleContainer = (props) => {

    //status between the mole being displayed and able to be hit or belwow ground and out of play
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +1)
        setDisplayMole(false)
    }

    // A ternary that will determine which component to render based on the displayMoles's true or false status
    let showMole = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />

    
    //function that ultimately compiles all of the above into the MoleContainer fucntion which will be sent to app.js
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {showMole}
        </div>
    )
}

export default MoleContainer