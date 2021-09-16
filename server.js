
// 1. Import express and create an instance of express server 
const express = require("express")
const app = express()
const port = 8000
const faker = require("faker")
// make sure these lines are above any app.get or app.post code blocks
//2. Confirguration for your express server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//3. Define route for your express server

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}
const UserRoutes = require("./routes/user.routes")
UserRoutes(app)

const CompanyRoutes = require("./routes/company.routes")
CompanyRoutes(app)

app.get('/api/user/company', (req, res) => {
    const newUser = new User();
    const newCompany = new Company();

    res.json({ company: newCompany, user: newUser });
})

//4. run your express server
app.listen(port, () => console.log("express server running on port:" + port))