import { Component, OnInit }     			from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }						from '../itemService/itemService';
import { Location }                         from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-traitementCommande',
    templateUrl: 'traitementCommande.component.html'

})
export class TraitementCommandeComponent /*implements OnInit*/ {
    title = 'Panier';

    constructor(
    	private itemService: ItemService,
    	private route: ActivatedRoute,
        private router: Router,
        private location: Location
    	){}

    /*ngOnInit(): void{
    	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.itemService.getItem(id).then(item => this.item = item);
    	});
    }*/

    goBack(): void{
        this.location.back();
    }

}

