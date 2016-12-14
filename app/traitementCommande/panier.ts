import {TraitementCommande} from "./traitementCommande";
export class Panier {
    id: number;
    panier: TraitementCommande[];
    total: number;
    userId: number

    constructor(private id:number, private panier: TraitementCommande[], private total:number, private userId: number) {
        this.id = id;
        this.panier = panier;
        this.total = total;
        this.userId = userId;
    }
}