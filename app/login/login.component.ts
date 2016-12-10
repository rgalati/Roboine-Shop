import {Component, OnInit }        from '@angular/core';
import {LoginService} from "../loginService/loginService";
import {Router, ActivatedRoute, Params}    from '@angular/router';
import {Login} from "./login";


@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    dataInvalid = false;
    logins:Login[];

    constructor(private loginService: LoginService, private router:Router){}

    ngOnInit(): void{
        this.getLogins();
    }

    getLogins():void{
        this.loginService.getLogins().subscribe((arrayOfLogins) => {
            this.logins = arrayOfLogins;
        })

    }


    checkLogin(username:String, password:String){
        for (var log of this.logins){
            if(log.username === username && log.password===password){
                this.dataInvalid=false;
                this.router.navigate(['/home']);
            }else{
                console.log("dommage");
                this.dataInvalid=true;
            }
        }
    }



}


