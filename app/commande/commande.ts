import {TraitementCommande} from "../traitementCommande/traitementCommande";
import {Panier} from "../traitementCommande/panier";
export class Commande {
    id: number
    date: Date
    panier: Panier
    user:number

    constructor(id: number, date: Date, panier: Panier, user: number) {
        this.id = id;
        this.date = date;
        this.panier = panier;
        this.user = user;
    }
}