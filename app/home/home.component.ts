import { Component, OnInit }     from '@angular/core';
import { Item }                  from '../item/item';
import { ItemService}            from '../itemService/itemService';
import { Router }               from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit{

    item_list: Item[];
    selectedItem: Item;

    constructor(private router: Router, private itemService: ItemService){ }

    getItems(): void{
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void{
        this.getItems();
    }

    onSelect(item: Item):void {
        this.selectedItem = item;
    }

    gotoItem(): void {
        /*let link = ['/item'];
        this.router.navigate(link);*/
        this.router.navigate(['/item', this.selectedItem.id]);
    }

}


