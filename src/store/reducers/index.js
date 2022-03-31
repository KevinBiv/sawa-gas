import { combineReducers } from "redux";
import userAuthReducers from "./userAuth.reducers";
import statisticsReducers from "./statistics.reducers";
import servicesReducers from "./services.reducers";
import financesReducers from "./finances.reducers";
import peopleReducers from "./people.reducers";
export default combineReducers({
  UserAuth: userAuthReducers,
  Statistics: statisticsReducers,
  Services: servicesReducers,
  Finances: financesReducers,
  People: peopleReducers,
});
