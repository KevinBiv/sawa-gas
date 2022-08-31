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

  //Report
  getReport: "GET REPORT",
  getReportSuccess: "GET REPORT SUCCESSFUL",
  getReportFail: "GET REPORT FAILED",

  sendReport: "SEND REPORT",
  sendReportSuccess: "SEND REPORT SUCCESSFUL",
  sendReportFail: "SEND REPORT FAILED",

  setSelectedReport: "SET SELECTED REPORT",

  //Services
  getServices: "GET SERVICES",
  getServicesSuccess: "GET SERVICES SUCCESSFUL",
  getServicesFail: "GET SERVICES FAILED",

  setSelectedService: "SET SELECTED SERVICE",

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

  //Statistics
  getGeneralStatistics: "GET GENERAL STATISTICS",
  getGeneralStatisticsSuccess: "GET GENERAL STATISTICS SUCCESSFUL",
  getGeneralStatisticsFail: "GET GENERAL STATISTICS FAILED",

  getIncomesStatistics: "GET INCOME STATISTICS",
  getIncomesStatisticsSuccess: "GET INCOME STATISTICS SUCCESSFUL",
  getIncomesStatisticsFail: "GET INCOME STATISTICS FAILED",

  //Styles
  setShowSidebar: "SET SHOW SIDEBAR",
};

export default actionTypes;
