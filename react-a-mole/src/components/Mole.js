//importing the mole image and allowing us to us to asynchronously manage this display
import {useEffect} from 'react'
import moleImage from '../RR-React-A-Mole-Images/mole.png'

// A useEffect hook that will start the timer and clean it up afterward
const Mole = (props) => {
                //mounting code that sets a timer of each Mole randomly between 1 and 5 seconds
    useEffect(() => {
        let numberOfSeconds = (Math.random() * 5000) + 1000;
        let timer = setTimeout(() => {
            props.toggle(false)
        }, numberOfSeconds)

        // cleanup code that will cancel the timer when a mole is bopped
        return () => {
            clearTimeout(timer)
        }
    })
    //returns our JSX which we will ultimately package into the Empltyslot function and send to MoleContainer
        return (
            <div>
                <img style={{'width': '30vw'}}
                src={moleImage}
                onClick={props.handleClick} />
            </div>
        )
}

export default Mole
