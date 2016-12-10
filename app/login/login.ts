export class Login{
    id: number
    username: String
    password: String


    constructor(id: number, username: String, password: String) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    constructor(username: String, password: String) {
        this.username = username;
        this.password = password;
    }
}