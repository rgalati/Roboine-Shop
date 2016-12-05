import {Component, OnInit, EventEmitter }        from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }				from '../itemService/itemService';
import { Item }                             from './item';
import { TraitementCommande }               from '../traitementCommande/traitementCommande';
import {TraitementCommandeComponent} from "../traitementCommande/traitementCommande.component";

@Component({
    moduleId: module.id,
    selector: 'my-item',
    templateUrl: 'item.component.html',
    directives:[TraitementCommandeComponent]
})
export class ItemComponent implements OnInit {
    title = 'Item_page';
    item: Item;
    cart_items: TraitementCommande[];
    trt_com: TraitementCommande;
    constructor(
    	private itemService: ItemService,
    	private route: ActivatedRoute,
        private router: Router
    	){
        this.cart_items = [];
    }

    ngOnInit(): void{
    	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.itemService.getItem(id).then(item => this.item = item);
    	});
    }

    goBack(): void{
        this.router.navigate(['/home']);
    }

    addToCart(item: Item, qte: String):void{
        var qte_n = parseInt(qte);
        if ((!(isNaN(qte_n))) && qte_n >0 && qte_n <100) {
            this.trt_com= {qte: qte_n, item :item};
            this.cart_items.push(this.trt_com);
        }
        console.log(this.cart_items[0].item.nom);
    }

}


