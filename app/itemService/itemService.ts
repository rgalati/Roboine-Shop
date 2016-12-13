import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item }         from  '../item/item';
import {TraitementCommande} from "../traitementCommande/traitementCommande";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {ItemComponent} from "../item/item.component";
import {Panier} from "../traitementCommande/panier";

@Injectable()
export class ItemService{
    private itemsUrl = 'app/items';
    items = [];
    cart = [];
    constructor(private http: Http){}

    private getItemFromJson(obj: Item): Item{
        return new Item(
            obj.id, obj.nom, obj.description, obj.categorie, obj.prix, obj.image)
    }

    getCartItemFromJson(obj: TraitementCommande): TraitementCommande{
        return new TraitementCommande(
           obj.id, obj.qte, obj.item)
    }

    getCartItem(){
        this.cart= [];
        var cartItemStorage = localStorage.getItem('cart');
        if(cartItemStorage === null){return this.cart;}
        var cartItem=JSON.parse(cartItemStorage);

        for (var i=0; i<cartItem.length; i++){
            var cartItemJson = this.getCartItemFromJson(cartItem[i]);
            this.cart.push(cartItemJson);
        }
        return this.cart;
    }


    getItems():Promise<Item[]>{
        return this.http.get(this.itemsUrl).toPromise().then(resp => resp.json().data as Item[]).catch(this.handleError);
    }
    getItem(id: number): Promise<Item>{
        return this.getItems().then(item_list => item_list.find(item => item.id ===id));
    }

    /*sendToDb(panier:Panier){
        let body = JSON.stringify(panier);
        return this.http.post('app/cartItems', body).map(() => {});
    }*/


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}