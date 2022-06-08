const QuotaCostList = require("../../_data_/AmsQuotaCostList.json");
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
    switch(process.env.AMS_QUOTA_TYPE) {
      case "trial":
        res.json(QuotaCostList.trial);
      case "standard":
        res.json(QuotaCostList.standard);
      case "marketplace": default:
        res.json(QuotaCostList.marketPlace);
    }
  },
};
