import { Component, OnInit }     			from '@angular/core';
import { ItemService }						from '../itemService/itemService';
import { Location }                         from '@angular/common';
import { TraitementCommande }               from './traitementCommande';


@Component({
    moduleId: module.id,
    selector: 'my-traitementCommande',
    templateUrl: 'traitementCommande.component.html'

})
export class TraitementCommandeComponent implements OnInit {
    title = 'Panier';
    cartItems:TraitementCommande[]
    total = 0;
    emptyCart: boolean;
    constructor(private location: Location, private itemService: ItemService){
    }

    ngOnInit(){
        this.cartItems = this.itemService.getCartItem()
        this.setEmptyCart();
        this.calculerPrixTotal();

    }

    goBack(): void{
        this.location.back();
    }


    setEmptyCart():void{
        console.log(this.cartItems);
        if (this.cartItems.length === 0){
            this.emptyCart = true;
        }else{
            this.emptyCart = false;
        }
    }

    validerCart():void{
        console.log("envoyer le panier dans la db");
    }

   calculerPrixTotal(): void{
       var total =0;
       if(this.cartItems.length === 0){ this.total = total;}
       for (var i = 0; i<this.cartItems.length; i++){
           var somme = this.cartItems[i].qte*this.cartItems[i].item.prix;
           total = total+somme;
       }
        this.total = total;

    }



}

