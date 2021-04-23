import { useEffect, useState } from 'react';
import './Timer.css'

const Timer = ({ setHide }) => {
  const startingTime = 60;
  const [time, setTime] = useState(startingTime);

  // Function that begins the countdown and reveals the text/content for list items (AKA Categories)
  const playGame = () => {
    setTime(time - 1);
    setHide(false);
  }

  // The function passed into the "useEffect" hook/function runs whenever the "time" state value is updated (NOTE: That also includes when the page first loads)
  useEffect(() => {
    // The code inside this if statement will NOT run when the value of the "time" state variable is equal to the amount of time (AKA secodns) set as the starting amount for the countdown timer.
    if(time !== startingTime){
      // Since "useEffect" runs everytime the "time" state value is updated, a setTimeout is used to delay the number change by one second each "time" state value changes.
      setTimeout(() => {
        // Checking to make sure the time has not run out (AKA checking to see if time is equal to zero)
        if(time > 0){
          // Updating the value for the "time" state variable which causes the Timer componenet to re-render and also causes the "useEffect" function to run
          setTime(time - 1);
          // Code inside of the "else" will tun when the time has run out (AKA When "time" is equal to zero)
        } else {
          // Updating the value for the "time" state variable by setting it back to the value for "startingTime" which causes the "Timer" component to re-render and also causes the "useEffect" function to run.
          setTime(startingTime);
          // Hides the text/content on all the categories (AKA List items) by adding the ".hide" CSS class to all of them
          setHide(true);
          // The alert is inside another setTimeout so that it will NOT run/display before the text/content is hidden for the categories (AKA List items)
          setTimeout(() => {
            alert('TIME IS UP!!!');
            // After the alert is complete (AKA The user clicks "OK") the categories (AKA List items) are shown again
            setHide(false);
          }, 100);
        }
      }, 1000);
    }
  }, [time]);

  return(
    <div className='Timer'>
      <div className='Timer-Top'>
        <p>TIMER</p>
        <button onClick={playGame} className='Timer-Top-Btn'>PLAY</button>
      </div>
      <div className='Timer-Display'>
        <h1 className='Timer-Display-H1'>{time}</h1>
      </div>
    </div>
  );
}
export default Timer;