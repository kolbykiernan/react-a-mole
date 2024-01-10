//importing the moleHill image and allowing us to us to asynchronously manage this display
import {useEffect} from 'react'
import moleHill from '../RR-React-A-Mole-Images/molehill.png'

// A useEffect hook that will start the timer and clean it up afterward
const EmptySlot = (props) => {

        useEffect(() => {
            //mounting code that sets a timer of each EmptySlot randomly between 1 and 5 seconds
            let numberOfSeconds = (Math.random() * 5000) + 1000;
            const timer = setTimeout(() => {
                props.toggle(true);
            }, numberOfSeconds)
            
            // cleanup code that will cancel the timer when a mole is bopped
            return () => {
                clearTimeout(timer);
            }
        })
        //returns our JSX which we will ultimately package into the Empltyslot function and send to MoleContainer
            return (
                <>
                 <img style = {{'width': '30vw'}} 
                 src= {moleHill} ></img>
                </>
            )

}

export default EmptySlot
