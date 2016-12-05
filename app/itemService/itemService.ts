import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item }         from  '../item/item';

@Injectable()
export class ItemService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private itemsUrl = 'app/items';
    constructor(private http: Http){}

    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl).toPromise().then(response => response.json().data as Item[]).catch(this.handleError);
    }

    getItem(id: number): Promise<Item>{
        return this.getItems().then(item_list => item_list.find(item => item.id ===id));
    }

    /*getCartItems(): TraitementCommande[]{
        return this.itemComponent.getCartItems();
    }*/

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}