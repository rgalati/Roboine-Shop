import {Component, OnInit }        from '@angular/core';
import {LoginService} from "../loginService/loginService";
import {Router, ActivatedRoute, Params}    from '@angular/router';
import {Login} from "./login";
import {Http, Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    dataInvalid = false;
    logins:Login[];

    constructor(private loginService: LoginService, private router:Router, private http:Http){}

    ngOnInit(): void{
        this.getLogins();
    }


    getLogins():void{
        this.loginService.getLogins().subscribe((arrayOfLogins) => {
            this.logins = arrayOfLogins;
        })

    }

    checkLogin(username:String, password:String){
        if(this.loginService.checkLogin(username, password)===true){
            this.dataInvalid=false;
            this.router.navigate(['/home']);
        }else{
            console.log("dommage");
            this.dataInvalid=true;
        }
    }

    goToRegister():void{
        this.router.navigate(['register']);
    }




}


