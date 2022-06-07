const QuotaCostList = require("../../_data_/QuotaCostList.json");
const CurrentAccount = require("../../_data_/CurrentAccount.json");

module.exports = {
  // Simulate accepted terms and conditions
  termsReview: async (c, req, res) => {
    return res.json({
      account_id: "test",
      organization_id: "test",
      TermsAvailable: false,
      TermsRequired: false,
    });
  },
  // Simulate a user account
  currentAccount: (req, res) => {
    res.json(CurrentAccount);
  },
  // Mock a summary of quota cost
  quotaCostGet: (req, res) => {
    res.json(QuotaCostList)
  },
};
