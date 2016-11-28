import { InMemoryDbService } from 'angular-in-memory-web-api';
export class Data implements InMemoryDbService {
    createDb() {
        let items = [
            {id: 1, name: 'Alienware 15', description:'Pc portable super stylé !', categorie: 'Pc portable', prix: '2199.90', image:'/images/alienware15.jpg'},
            {id: 2, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 3, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 4, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 5, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 6, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 7, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 8, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 9, name: '', description:'', categorie: '', prix: '', image:''},
            {id: 10, name: '', description:'', categorie: '', prix: '', image:''}
        ];
        return {items};
    }
}