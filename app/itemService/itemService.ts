import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item }         from  '../item/item';
import {TraitementCommande} from "../traitementCommande/traitementCommande";
import 'rxjs/Rx';
import {Panier} from "../traitementCommande/panier";
import {Commande} from "../commande/commande";
import {LoginService} from "../loginService/loginService";
import {Observable} from "rxjs";

@Injectable()
export class ItemService{
    private itemsUrl = 'app/items';
    items = [];
    cart = [];
    commande:Commande;
    comId: number =0;
    constructor(private http: Http, private loginService:LoginService){}

    private getItemFromJson(obj: Item): Item{
        return new Item(
            obj.id, obj.nom, obj.description, obj.categorie, obj.prix, obj.image)
    }

    getCartItemFromJson(obj: TraitementCommande): TraitementCommande{
        return new TraitementCommande(
           obj.id, obj.qte, obj.item)
    }

    getCommandeFromJson(obj: Commande): Commande{
        return new Commande(obj.id, obj.date, obj.panier, obj.user);
    }

    getCartItem(){
        this.cart= [];
        var cartItemStorage = localStorage.getItem('cart');
        if(cartItemStorage === null){return this.cart=[];}
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

    sendToDb(panier:Panier){
        var userId = this.loginService.getCurrentUser().id;
        var date = new Date();
        this.comId++;
        this.commande = new Commande(this.comId,date, panier, userId);
        let body = JSON.stringify(this.commande);
        return this.http.post('app/order', body).map(
            (resp: Response) => {
                return this.getCommandeFromJson(resp.json().data);
            });
    }

    getCommandes():Observable<Commande[]>{
        return this.http.get('app/order').map((resp:Response) => {
            var fetchedCom=[];
            for (let com of resp.json().data){
                fetchedCom.push(this.getCommandeFromJson(com));
            }
            return fetchedCom as Array<Commande>;
        })
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}