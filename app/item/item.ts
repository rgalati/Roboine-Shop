export class Item {
    id: number
    nom: String
    description: String
    categorie: String
    prix: number
    image: String


    constructor(id: number, nom: String, description: String, categorie: String, prix: number, image: String) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.categorie = categorie;
        this.prix = prix;
        this.image = image;
    }
}