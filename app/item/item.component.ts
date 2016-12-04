import { Component, OnInit }     	from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }				from '../itemService/itemService';
import { Item }                             from './item';
import { TraitementCommande }               from '../traitementCommande/traitementCommande';

@Component({
    moduleId: module.id,
    selector: 'my-item',
    templateUrl: 'item.component.html'

})
export class ItemComponent implements OnInit {
    title = 'Item_page';
    item: Item;
    qte: String;
    cart_items: Item[];
    private trt_com: TraitementCommande;
    constructor(
    	private itemService: ItemService,
    	private route: ActivatedRoute,
        private router: Router
    	){}

    ngOnInit(): void{
    	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.itemService.getItem(id).then(item => this.item = item);
    	});
    }

    goBack(): void{
        this.router.navigate(['/home']);
    }

    addToCart(item: Item):void{
        var qte_n = parseInt(this.qte);
        if ((!(isNaN(qte_n))) && qte_n >0 && qte_n <100) {
            this.trt_com= {qte: qte_n, item :item};
        }
        console.log(this.trt_com.qte);
        console.log(this.trt_com.item.nom);
    }

}


