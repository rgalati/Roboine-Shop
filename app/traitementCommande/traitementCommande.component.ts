import { Component, OnInit }     			from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }						from '../itemService/itemService';
import { Location }                         from '@angular/common';
import { TraitementCommande }               from './traitementCommande';
import { Item }                             from '../item/item';
import { ItemComponent }                    from '../item/item.component';

@Component({
    moduleId: module.id,
    selector: 'my-traitementCommande',
    templateUrl: 'traitementCommande.component.html',
    inputs: ['cart_items']

})
export class TraitementCommandeComponent {
    title = 'Panier';

    constructor(private location: Location){}

    goBack(): void{
        this.location.back();
    }

}

