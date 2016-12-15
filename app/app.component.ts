import {Component, OnInit}     from '@angular/core';
import {  Router }	from '@angular/router';
import forEach = require("core-js/fn/array/for-each");

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent implements OnInit{
    title = 'Roboine-Shop';
    currentUser:{};
    cart=[];
    constructor(private router: Router){}

    ngOnInit():void{
        this.currentUser=localStorage.getItem('current_User');
    }
    goToCart():void{
    	this.router.navigate(['/cart']);
    }

    goToHome():void{
        this.router.navigate(['/home']);
    }

    gotToLogin():void{
        this.router.navigate(['login']);
    }

    goToAccount():void{
        this.router.navigate(['accompte']);
    }

    goToCommande():void{
        this.router.navigate(['commande']);
    }

    logOut():void{
        localStorage.removeItem('current_User');
        console.log("logout");
        this.currentUser=localStorage.getItem('current_User');
        this.router.navigate(['home']);
    }





}


