import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ItemSearchService } from '../item-searchService/item-search.service';
import { Item } from '../item/item';
@Component({
    moduleId: module.id,
    selector: 'item-search',
    templateUrl: 'item-search.component.html',
    styleUrls:['item-search.component.css'],
    providers: [ItemSearchService]
})
export class ItemSearchComponent implements OnInit {
    items: Observable<Item[]>;
    private searchTerms = new Subject<string>();
    constructor(private itemSearchService: ItemSearchService, private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.items = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.itemSearchService.search(term)
                // or the observable of empty items if no search term
                : Observable.of<Item[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Item[]>([]);
            });

    }

    goToItem(item:Item):void {
        this.router.navigate(['/item', item.id]);
    }
}