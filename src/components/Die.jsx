// Die component represents a single die in the game
export default function Die(props){
    const styles = {
        // Dynamic style based on whether the die is held or not
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <button 
            style={styles}// Button background changes when held
            onClick={() => props.hold(props.id)} // Calls the hold function with die ID
            aria-pressed={props.isHeld} // Accessibility: Indicates the button is active or not
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}  // Accessibility label for screen readers
            >{props.value} {/* Displays the value of the die */}</button>
    )
}