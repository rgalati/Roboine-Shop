import { Component, OnInit }     from '@angular/core';
import { Item }                  from '../item/item';
import { ItemService}            from '../itemService/itemService';
import { Router }                from '@angular/router';
import {LoginService} from "../loginService/loginService";
import {Login} from "../login/login";

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit{

    items: Item[];
    selectedItem: Item;
    currentUser:Login;

    constructor(private router: Router, private itemService: ItemService, private loginService:LoginService){ }

    ngOnInit(): void{
        this.itemService.getItems().then(items => this.items =items);
        this.currentUser= this.loginService.getCurrentUser();
    }

    onSelect(item: Item):void {
        this.selectedItem = item;
    }

    gotoItem(): void {
        this.router.navigate(['/item', this.selectedItem.id]);
    }

}


