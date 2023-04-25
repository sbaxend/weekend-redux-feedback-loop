import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Third() {
     //setting hooks to variables
  const history = useHistory();
  const dispatch = useDispatch();

  //bringing the values form the redux store
  const personSupport = useSelector((store) => store.personSupport);

  //Adding a function to add the feelings to the store
  const addSupport = (event) => {
    const action = { type: "SET_PERSON_SUPPORT", payload: event.target.value };
    dispatch(action);
  };

  const nextPage = (event) => {
    event.preventDefault();
    if (personSupport > 0) {
        history.push('/fourth-question');
    } else {
        alert('Please Proivide A Rating Greater Than 0');
    }
}
  return (
    <div>
      <header>Feedback!</header>

      <h1>3 of 4 of pages </h1>
      <form onSubmit={nextPage}>
        <label htmlFor="support">How well are you being supported?</label>
        <p> Current Value: {personSupport} </p>
        <input
          id="support"
          value={personSupport}
          onChange={addSupport}
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
export default Third;