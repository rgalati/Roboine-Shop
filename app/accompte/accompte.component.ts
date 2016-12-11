import {Component, OnInit }        from '@angular/core';
import {LoginService} from "../loginService/loginService";




@Component({
    moduleId: module.id,
    selector: 'my-accompte',
    templateUrl: 'accompte.component.html'
})
export class AccompteComponent implements OnInit {
    title: 'Compte de ...';
    nom: 'username';
    email: '...';

    constructor(private loginService: LoginService){}

    ngOnInit(): void{
        var login = this.loginService.getCurrentUser();
        this.nom = login['username'];
        this.email = login['email'];
    }

}
