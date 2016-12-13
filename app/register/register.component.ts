import { Component, OnInit }     			from '@angular/core';
import { LoginService }						from '../loginService/loginService';


@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html'

})
export class RegisterComponent implements OnInit {
    title = 'Register Page';

    constructor(private loginService: LoginService){
    }

    ngOnInit(){

    }

}

