import { Item } from '../item/item';
export class TraitementCommande {
    qte: number
    item: Item;

    constructor(qte: number, item: Item) {
        this.qte = qte;
        this.item = item;
    }
}