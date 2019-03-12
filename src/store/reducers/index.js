import { combineReducers } from "redux";
import landingReducer from "./landingReducer";
import uploadThesisReducer from "./uploadThesisReducer";

export default combineReducers({
  landing: landingReducer,
  uploadThesis: uploadThesisReducer
});
