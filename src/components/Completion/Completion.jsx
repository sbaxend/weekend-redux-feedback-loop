
import { useHistory } from "react-router-dom";

function Completion() {
    const history = useHistory()
    const backHome = (event) => {
        event.preventDefault();
       history.push('/')
    }

  return (
    <div>
      <h2>Thank You For Your Feedback!</h2>
      <button onClick={backHome}>Start Over</button>
    </div>
  );
}

export default Completion;
