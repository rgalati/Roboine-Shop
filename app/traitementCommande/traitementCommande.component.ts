import { Component, OnInit }     			from '@angular/core';
import { ItemService }						from '../itemService/itemService';
import { Location }                         from '@angular/common';
import { TraitementCommande }               from './traitementCommande';
import {Panier} from "./panier";
import {LoginService} from "../loginService/loginService";
import {Commande} from "../commande/commande";
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";


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
    panier: Panier;
    panierId:number = 1;
    userId: number;
    commande:Commande;
    constructor(private location: Location, private itemService: ItemService, private loginService:LoginService, private router:Router){
    }

    ngOnInit(){
        this.cartItems = this.itemService.getCartItem()
        this.setEmptyCart();
        this.calculerPrixTotal();
        var login =  localStorage.getItem('current_User');
        console.log("loginStorage: "+JSON.stringify(localStorage.getItem('current_User')));
        if(login === undefined || login === null){console.log("testlog1 "+this.userId); this.userId = null;}else{
            this.userId = this.loginService.getCurrentUser().id;
            console.log("testlog2 "+this.userId);}
    }

    goBack(): void{
        this.location.back();
    }


    setEmptyCart():void{
        if (this.cartItems.length === 0){
            this.emptyCart = true;
        }else{
            this.emptyCart = false;
        }
    }

    validerCart():void{
        //this.router.navigate(['login']);
        if(this.userId === null || this.userId === undefined){ console.log(this.userId); this.router.navigate(['login']);}
        else {
            this.panier = new Panier(this.panierId, this.cartItems,this.total, this.userId);
            this.itemService.sendToDb(this.panier).subscribe((newCom) => {this.commande = newCom});
            this.cartItems=[];
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
            this.ngOnInit();
            }
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

    deleteCartItem(cart : TraitementCommande): void{
        var index= this.cartItems.indexOf(cart);
        this.cartItems.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.ngOnInit();
    }

}

