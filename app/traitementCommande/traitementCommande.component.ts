import { Component, OnInit }     			from '@angular/core';
import { ItemService }						from '../itemService/itemService';
import { Location }                         from '@angular/common';
import { TraitementCommande }               from './traitementCommande';


@Component({
    moduleId: module.id,
    selector: 'my-traitementCommande',
    templateUrl: 'traitementCommande.component.html',
    //inputs: ['cart_items']

})
export class TraitementCommandeComponent implements OnInit {
    title = 'Panier';
    cartItems: TraitementCommande[];
    total ='?';
    sousTotal = '?';
    constructor(private location: Location, private itemService: ItemService){

    }

    ngOnInit(){
        this.getCartItems();
    }

    goBack(): void{
        this.location.back();
    }

    getCartItems(): void{
        this.itemService.getCartItems().subscribe((newCartItem) =>{
            this.cartItems = newCartItem;
        })
    }

    validerCart():void{
        console.log("envoyer le panier dans la db");
    }

    calculerPrixTotal(qte : String, prix: String): void{
        console.log(qte+ "-"+ prix+"-"+qte*prix);
        this.total=qte*prix;
    }

    calculerSousTotal():void{

    }

}

