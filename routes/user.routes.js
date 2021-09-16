const Usercontroller = require("../controllers/user.controllers")


module.exports = app => {
    // app.get("/api/users/new", Usercontroller.allUsers)
    app.post("/api/users/new", Usercontroller.newUser)

}