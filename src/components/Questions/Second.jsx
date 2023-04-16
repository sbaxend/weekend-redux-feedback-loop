import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Second() {
    //setting hooks to variables
  const history = useHistory();
  const dispatch = useDispatch();

  //bringing the values form the redux store
  const personUnderstanding = useSelector((store) => store.personUnderstanding);

  //Adding a function to add the feelings to the store
  const addUnderstanding = (event) => {
    const action = { type: "SET_PERSON_UNDERSTANDING", payload: event.target.value };
    dispatch(action);
  };

  const nextPage = (event) => {
    event.preventDefault();
    if (personUnderstanding > 0) {
        history.push('/second-question');
    } else {
        alert('Please Proivide A Rating Greater Than 0');
    }
}
  return (
    <div>
      <header>Feedback!</header>

      <h1>2 of 4 of pages </h1>
      <form onSubmit={nextPage}>
        <label htmlFor="understanding">How well are you understanding?</label>
        <p> Current Value: {personUnderstanding} </p>
        <input
          id="understanding"
          value={personUnderstanding}
          onChange={addUnderstanding}
          type="range"
          min="1"
          max="10"
        />
        <br />
        <input type="submit" value="Next"/>
      </form>
    </div>
  );
}

export default Second;