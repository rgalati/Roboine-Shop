import { Component, OnInit }     from '@angular/core';
import { ItemService}            from '../itemService/itemService';
import {LoginService} from "../loginService/loginService";

@Component({
    moduleId: module.id,
    selector: 'my-commande',
    templateUrl: 'commande.component.html'

})
export class CommandeComponent implements OnInit{

    currentUser:{};
    title= 'Mes commandes';
    constructor(private itemService: ItemService, private loginService: LoginService){ }

    ngOnInit(): void{
        this.currentUser = this.loginService.getCurrentUser();
        console.log(this.currentUser['id']);
        console.log(this.currentUser['username']);
    }

}


