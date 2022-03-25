import { combineReducers } from "redux";
import chartsReducers from "./charts.reducers";
import userAuthReducers from "./userAuth.reducers";
import profileReducers from "./profile.reducers";
import subscriptionsReducers from "./subscriptions.reducers";
import reportReducers from "./report.reducers";
import patientsReducers from "./patients.reducers";
import incomesReducers from "./incomes.reducers";
import statisticsReducers from "./statistics.reducers";
import nursesReducers from "./nurses.reducers";
import servicesReducers from "./services.reducers";
import financesReducers from "./finances.reducers";
import peopleReducers from "./people.reducers";
export default combineReducers({
  UserAuth: userAuthReducers,
  Profile: profileReducers,
  Charts: chartsReducers,
  Subscriptions: subscriptionsReducers,
  Reports: reportReducers,
  Patients: patientsReducers,
  Incomes: incomesReducers,
  Statistics: statisticsReducers,
  Nurses: nursesReducers,
  Services: servicesReducers,
  Finances: financesReducers,
  People: peopleReducers,
});
