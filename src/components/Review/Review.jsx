import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {
  const personFeelings = useSelector((store) => store.personFeelings);
  const personUnderstanding = useSelector((store) => store.personUnderstanding);
  const personSupport = useSelector((store) => store.personSupport);
  const personComments = useSelector((store) => store.personComments);
  const history = useHistory();

  const dispatch = useDispatch();
  const sendToServer = () => {
    axios
      .post("/feedback", {
        feeling: personFeelings,
        understanding: personUnderstanding,
        support: personSupport,
        comments: personComments,
      })
      .then((response) => {
        //clear inputs
        dispatch({ type: "CLEAR_FORM" });
        //navigate back to beginning
        history.push("/completed");
      })
      .catch((error) => {
        alert("Something went wrong! Please try again later");
        console.log(`error`);
      });
  };

  return (
    <div>
      <h1>Review</h1>
      <div>Feelings: {personFeelings}</div>
      <div>Understanding: {personUnderstanding}</div>
      <div>Support: {personSupport}</div>
      <div>Comments: {personComments}</div>
      <button onClick={sendToServer}>Submit</button>
    </div>
  );
}

export default Review;
