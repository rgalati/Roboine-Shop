import {TraitementCommande} from "./traitementCommande";
export class Panier {
    id: number;
    panier: TraitementCommande[];
    userId: number

    constructor(private id:number, panier: TraitementCommande[], userId: number) {
        this.id = id;
        this.panier = panier;
        this.userId = userId;
    }
}