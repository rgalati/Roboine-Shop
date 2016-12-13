import {TraitementCommande} from "../traitementCommande/traitementCommande";
export class Commande {
    id: number
    date: Date
    panier: TraitementCommande[]
    user:number
}