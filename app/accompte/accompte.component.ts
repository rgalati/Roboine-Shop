import {Component, OnInit }        from '@angular/core';
import {LoginService} from "../loginService/loginService";




@Component({
    moduleId: module.id,
    selector: 'my-accompte',
    templateUrl: 'accompte.component.html'
})
export class AccompteComponent implements OnInit {
    title: 'Compte de ...';
    username: 'username';
    email: 'email';
    prenom: 'fName';
    nom:'lName';
    street: 'street';
    npa= 'npa';
    city='city';
    country: 'country';
    phone: 'phone';

    constructor(private loginService: LoginService){}

    ngOnInit(): void{
        this.initAccompteData();
    }

    initAccompteData():void{
        var login = this.loginService.getCurrentUser();
        this.nom = login['lName'];
        this.email = login['email'];
        this.username= login['username'];
        this.prenom= login['fName'];
        this.street= login['street'];
        this.npa= login['npa'];
        this.city= login['city'];
        this.country= login['country'];
        this.phone= login['phone'];
    }

}
