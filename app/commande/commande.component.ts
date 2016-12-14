import { Component, OnInit }     from '@angular/core';
import { ItemService}            from '../itemService/itemService';
import {LoginService} from "../loginService/loginService";
import {Commande} from "./commande";

@Component({
    moduleId: module.id,
    selector: 'my-commande',
    templateUrl: 'commande.component.html'

})
export class CommandeComponent implements OnInit{

    title= 'Mes commandes';
    commande:Commande[]=[];
    constructor(private itemService: ItemService, private loginService: LoginService){ this.commande= [];}

    ngOnInit(): void{
        this.getOrders();
        console.log("order: "+JSON.stringify(this.commande));
    }

    getOrders(){
       this.itemService.getCommandes().subscribe((newCom) => { this.commande = newCom});
    }
}


