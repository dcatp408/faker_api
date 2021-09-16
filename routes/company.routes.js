const Usercontroller = require("../controllers/company.controllers")


module.exports = app => {
    // app.get("/api/companies/new", Usercontroller.allCompanies)
    app.post("/api/companies/new", Usercontroller.newCompany)

}