import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function First() {
  //setting hooks to variables
  const history = useHistory();
  const dispatch = useDispatch();

  //bringing the values form the redux store
  const personFeelings = useSelector((store) => store.personFeelings);

  //Adding a function to add the feelings to the store
  const addFeelings = (event) => {
    const action = { type: "SET_PERSON_FEELINGS", payload: event.target.value };
    dispatch(action);
  };

  const nextPage = (event) => {
    event.preventDefault();
    if (personFeelings > 0) {
        history.push('/second-question');
    } else {
        alert('Please Proivide A Rating Greater Than 0');
    }
}
  return (
    <div>
      <header>Feedback!</header>

      <h1>1 of 4 of pages </h1>
      <form onSubmit={nextPage}>
        <label htmlFor="feeling">How are you feeling?</label>
        <p> Current Value: {personFeelings} </p>
        <input
          id="feeling"
          value={personFeelings}
          onChange={addFeelings}
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

export default First;
