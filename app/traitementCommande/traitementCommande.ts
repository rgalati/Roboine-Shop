import { Item } from '../item/item';
export class TraitementCommande {
    id: number;
    qte: number;
    item: Item;

    constructor(id: number, qte: number, item: Item) {
        this.id = id;
        this.qte = qte;
        this.item = item;
    }
}