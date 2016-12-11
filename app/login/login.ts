export class Login{
    id: number
    username: String
    password: String
    email: String
    fName: String
    lName: String
    street: String
    npa: String
    city: String
    country: String
    phone: String


    constructor(id: number, username: String, password: String, email: String, fName:String, lName:String, street: String, npa: String, city: String, country: String, phone: String) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email=email;
        this.fName=fName;
        this.lName=lName;
        this.street=street;
        this.npa=npa;
        this.city=city;
        this.country=country;
        this.phone=phone;
    }

    constructor(username: String, password: String) {
        this.username = username;
        this.password = password;
    }
}