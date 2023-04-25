import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Fourth() {
  //setting hooks to variables
  const history = useHistory();
  const dispatch = useDispatch();

  //bringing the values form the redux store
  const personComments = useSelector((store) => store.personComments);

  //Adding a function to add the feelings to the store
  const addComments = (event) => {
    const action = { type: "SET_PERSON_COMMENTS", payload: event.target.value };
    dispatch(action);
  };

  const nextPage = (event) => {
    event.preventDefault();
    history.push("/review");
  };
  return (
    <div>
      <header>Feedback!</header>

      <h1>3 of 4 of pages </h1>
      <form onSubmit={nextPage}>
        <label htmlFor="support">How well are you being supported?</label>
        <p> Current Value: {personComments} </p>
        <input
          id="support"
          value={personComments}
          onChange={addComments}
          type="text "
          placeholder="ENTER COMMENTS HERE"
        />
        <br />
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}
export default Fourth;
