import {Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }				from '../itemService/itemService';
import { Item }                             from './item';
import { TraitementCommande }               from '../traitementCommande/traitementCommande';
import {LoginService} from "../loginService/loginService";
import {Panier} from "../traitementCommande/panier";


@Component({
    moduleId: module.id,
    selector: 'my-item',
    templateUrl: 'item.component.html'
})
export class ItemComponent implements OnInit {
    title = 'Item_page';
    item: Item;
    cart_items;
    id_trt_com = 1;
    constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router, private loginService:LoginService){ this.cart_items = [];}

    ngOnInit(): void{
    	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.itemService.getItem(id).then(item => this.item = item);
    	});
        this.cart_items = this.itemService.getCartItem();
    }

    goBack(): void{
        this.router.navigate(['/home']);
    }

    addToCart(item: Item, qte: String):void{
        var qte_n = parseInt(qte);
        if ((!(isNaN(qte_n))) && qte_n >0 && qte_n <100) {
            var trt_com= new TraitementCommande(this.id_trt_com, qte_n, item);
            this.cart_items.push(trt_com);
            this.id_trt_com = this.id_trt_com+1;
            this.setCartStorage();
        }
    }


    setCartStorage():void{
        var cart = JSON.stringify(this.cart_items);
        localStorage.setItem('cart', cart);
    }
}


