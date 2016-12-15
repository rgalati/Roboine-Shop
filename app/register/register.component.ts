import { Component, OnInit }     			from '@angular/core';
import { LoginService }						from '../loginService/loginService';
import {Login} from "../login/login";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html'

})
export class RegisterComponent implements OnInit {
    title = 'Enregistrez-vous';
    id: number = 10;
    login:Login;
    constructor(private loginService: LoginService, private router:Router){
    }

    ngOnInit(){

    }

    register(username: String, password: String, email: String, fName:String, lName:String, street: String, npa: String, city: String, country: String, phone: String):void{
        this.id = this.id+1;
        var username = username;
        var password = password;
        var email=email;
        var fName=fName;
        var lName=lName;
        var street=street;
        var npa=npa;
        var city=city;
        var country=country;
        var phone=phone;
        var login = new Login(this.id,username,password,email,fName,lName,street,npa,city,country,phone);
        this.loginService.setCurrentUser(login);
        console.log("login.ts: "+ localStorage.getItem('current_User'))
        this.loginService.postLoginToDb(login).subscribe(newLogin => this.login = newLogin);
        console.log("newLog: "+this.login);
        this.router.navigate(['home'])
    }
}

