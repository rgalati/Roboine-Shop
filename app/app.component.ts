import { Component, OnInit }     from '@angular/core';
import { Item }                  from './item/item';
import { ItemService}            from './itemService/itemService';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent implements OnInit{
    title = 'Roboine-Shop';

    item_list: Item[];

    constructor(private itemService: ItemService){}

    getItems(): void{
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void{
        this.getItems();
    }

}


