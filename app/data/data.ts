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
            }
        ];


        let cartItems = [
            {
                qte: 3,
                item:{id: 3,
                nom: 'Alienware-15',
                description: 'Pc portable super stylé !',
                categorie: 'Pc portable',
                prix: 2199.90,
                image: 'app/images/1.jpg'
                }
            }
            ];

        let users = [
            {
                id:1,
                username: 'admin',
                password: '1234'

            }
        ];

        return {items, cartItems, users};
    }
}