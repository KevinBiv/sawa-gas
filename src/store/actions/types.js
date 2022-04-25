const actionTypes = {
  //AUNTHENTICATIONS

  getUser: "GET USER",
  getUserSuccess: "GET USER SUCCESSFUL",
  getUserFail: "GET USER FAILED",

  updateUser: "UPDATE USER",
  updateUserSuccess: "UPDATE USER SUCCESSFUL",
  updateUserFail: "UPDATE USER FAILED",

  LogUserIn: "LOG USER IN",
  LogUserInSuccess: "LOG USER IN SUCCESSFUL",
  LogUserInFail: "LOG USER IN FAILED",

  LogUserOut: "LOG USER OUT",
  //Profile
  createProfile: "CREATE PROFILE",
  createProfileSuccess: "CREATE PROFILE SUCCESSFUL",
  createProfileFail: "CREATE PROFILE FAILED",

  getProfile: "GET PROFILE",
  getProfileSuccess: "GET PROFILE SUCCESSFUL",
  getProfileFail: "GET PROFILE FAILED",

  updateProfile: "UPDATE PROFILE",
  updateProfileSuccess: "UPDATE PROFILE SUCCESSFUL",
  updateProfileFail: "UPDATE PROFILE FAILED",
  //Availability
  createAvailability: "CREATE AVAILABILITY",
  createAvailabilitySuccess: "CREATE AVAILABILITY SUCCESSFUL",
  createAvailabilityFail: "CREATE AVAILABILITY FAILED",

  getAvailability: "GET AVAILABILITY",
  getAvailabilitySuccess: "GET AVAILABILITY SUCCESSFUL",
  getAvailabilityFail: "GET AVAILABILITY FAILED",

  updateAvailability: "UPDATE AVAILABILITY",
  updateAvailabilitySuccess: "UPDATE AVAILABILITY SUCCESSFUL",
  updateAvailabilityFail: "UPDATE AVAILABILITYE FAILED",
  //Subscriptions
  createSubscription: "CREATE SUBSCRIPTIONS",
  createSubscriptionSuccess: "CREATE SUBSCRIPTIONS SUCCESSFUL",
  createSubscriptionFail: "CREATE SUBSCRIPTIONS FAILED",

  getSubscriptions: "GET SUBSCRIPTIONS",
  getSubscriptionsSuccess: "GET SUBSCRIPTIONS SUCCESSFUL",
  getSubscriptionsFail: "GET SUBSCRIPTIONS FAILED",

  updateSubscription: "UPDATE SUBSCRIPTIONS",
  updateSubscriptionSuccess: "UPDATE SUBSCRIPTIONS SUCCESSFUL",
  updateSubscriptionFail: "UPDATE SUBSCRIPTIONS FAILED",

  deleteSubscription: "DELETE SUBSCRIPTIONS",
  deleteSubscriptionSuccess: "DELETE SUBSCRIPTIONS SUCCESSFUL",
  deleteSubscriptionFail: "DELETE SUBSCRIPTIONS FAILED",
  setSelectedSubscription: "SET SELECTED SUBSCRIPTIONS",
  //Charts
  getCharts: "GET CHARTS USER",
  getChartsSuccess: "GET CHARTS SUCCESSFUL",
  getChartsFail: "GET CHARTS FAILED",

  sendChart: "SEND CHART USER",
  sendChartSuccess: "SEND CHART SUCCESSFUL",
  sendChartFail: "SEND CHART FAILED",

  setSelectedChart: "SET SELECTED CHART",

  //Report
  getReport: "GET REPORT",
  getReportSuccess: "GET REPORT SUCCESSFUL",
  getReportFail: "GET REPORT FAILED",

  sendReport: "SEND REPORT",
  sendReportSuccess: "SEND REPORT SUCCESSFUL",
  sendReportFail: "SEND REPORT FAILED",

  setSelectedReport: "SET SELECTED REPORT",

  //Patients
  getPatients: "GET PATIENTS",
  getPatientsSuccess: "GET PATIENTS SUCCESSFUL",
  getPatientsFail: "GET PATIENTS FAILED",

  //Services
  getServices: "GET SERVICES",
  getServicesSuccess: "GET SERVICES SUCCESSFUL",
  getServicesFail: "GET SERVICES FAILED",

  //Finances
  getFinances: "GET FINANCES",
  getFinancesSuccess: "GET FINANCES SUCCESSFUL",
  getFinancesFail: "GET FINANCES FAILED",
  //PEOPLE
  getPeople: "GET PEOPLE",
  getPeopleSuccess: "GET PEOPLE SUCCESSFUL",
  getPeopleFail: "GET PEOPLE FAILED",
  //INCOME
  getIncomes: "GET INCOMES",
  getIncomesSuccess: "GET INCOMES SUCCESSFUL",
  getIncomesFail: "GET INCOMES FAILED",
  //Nurses
  getNurses: "GET NURSES",
  getNursesSuccess: "GET NURSES SUCCESSFUL",
  getNursesFail: "GET NURSES FAILED",

  getPendingNurses: "GET PENDING NURSES",
  getPendingNursesSuccess: "GET PENDING NURSES SUCCESSFUL",
  getPendingNursesFail: "GET PENDING NURSES FAILED",

  setSelectedNurse: "SET SELECTED NURSE",
  //Statistics
  getGeneralStatistics: "GET GENERAL STATISTICS",
  getGeneralStatisticsSuccess: "GET GENERAL STATISTICS SUCCESSFUL",
  getGeneralStatisticsFail: "GET GENERAL STATISTICS FAILED",

  getIncomesStatistics: "GET INCOME STATISTICS",
  getIncomesStatisticsSuccess: "GET INCOME STATISTICS SUCCESSFUL",
  getIncomesStatisticsFail: "GET INCOME STATISTICS FAILED",

  getPatientsStatistics: "GET PATIENTS STATISTICS",
  getPatientsStatisticsSuccess: "GET PATIENTS STATISTICS SUCCESSFUL",
  getPatientsStatisticsFail: "GET PATIENTS STATISTICS FAILED",
  //Styles
  setShowSidebar: "SET SHOW SIDEBAR",
};

export default actionTypes;
