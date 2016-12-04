import { Component, OnInit }     from '@angular/core';
import {  Router }	from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent{
    title = 'Roboine-Shop';

    constructor(private router: Router){}

    goToCart():void{
    	this.router.navigate(['/cart']);
    }

    goToHome():void{
        this.router.navigate(['/home']);
    }
}


