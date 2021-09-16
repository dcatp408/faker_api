// module.exports.allCompanies = (req, res) => {
//     res.json("hello world")
// }
module.exports.newCompany = (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
}