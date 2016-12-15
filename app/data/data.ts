import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Item} from "../item/item";
export class Data implements InMemoryDbService {
    createDb() {
        let items = [
            {
                id: 1,
                nom: 'Alienware-15',
                description: 'Pc portable super stylé !',
                categorie: 'Pc portable',
                prix: 2199.90,
                image: 'app/images/1.jpg'
            },
            {
                id: 2,
                nom: 'Asus-G752VS',
                description: 'Intel Core i7-6700HQ',
                categorie: 'Pc portable',
                prix: 2363,
                image: 'app/images/asus.png'
            },
            {
                id: 3,
                nom: 'Samsung Galaxy S7',
                description: 'Un, deux, trois, souriez! La Motion Photo capture les trois magnifiques secondes avant d’appuyer sur le bouton. Vous pouvez aussi choisir quel instant vous souhaitez conserver comme image.',
                categorie: 'Smartphone',
                prix: 719,
                image: 'app/images/samsung7.jpg'
            },
            {
                id: 4,
                nom: 'Apple iPhone 7 Plus',
                description: 'L’iPhone 7 améliore de façon spectaculaire l’expérience iPhone, jusque dans ses aspects les plus fondamentaux. Il inaugure des systèmes photographiques ultra-sophistiqués. Il offre des performances et une autonomie jamais vues sur un iPhone. Il intègre des haut‑parleurs stéréo, pour une immersion sonore totale. Il est doté de l’écran d’iPhone le plus éclatant et le plus lumineux.',
                categorie: 'Smartphone',
                prix: 899,
                image: 'app/images/iphone7.jpg'
            },
            {
                id: 5,
                nom: 'SONY KD-85XD8505B',
                description: "Pour une qualité d'image ultime, ce téléviseur associe la résolution élevée de la 4K à la luminosité, la couleur et le niveau de détail du mode HDR (Images à dynamique et contraste élevés). Les zones auparavant cachées d'ombre et de lumière du soleil sont maintenant nettes et détaillées. Laissez-vous séduire par des images plus lumineuses et des noirs plus profonds pour encore plus de détails et de réalisme.",
                categorie: 'Télévision',
                prix: 8207,
                image: 'app/images/sony_kd85.jpg'
            }
        ];


        let order = [];

        let users = [];

        return {items, order, users};
    }
}