// module.exports.allUsers = (req, res) => {
//     res.json("hello world")
// }
module.exports.newUser = (req, res) => {
    const newUser = new User();
    res.json(newUser)
}


