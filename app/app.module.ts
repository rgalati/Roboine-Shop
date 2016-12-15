import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }         from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule }    from '@angular/http';
import { Data }  from './data/data';
import {ItemService }   from './itemService/itemService';
import { ItemComponent }    from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }    from './home/home.component';
import { TraitementCommandeComponent }  from './traitementCommande/traitementCommande.component';
import { LoginComponent }               from './login/login.component'
import {LoginService} from "./loginService/loginService";
import {AccompteComponent} from "./accompte/accompte.component";
import {CommandeComponent} from "./commande/commande.component";
import {RegisterComponent} from "./register/register.component";
import {ItemSearchComponent} from "./item-search/item-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(Data),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemComponent,
        HomeComponent,
        TraitementCommandeComponent,
        LoginComponent,
        AccompteComponent,
        CommandeComponent,
        RegisterComponent,
        ItemSearchComponent

    ],
    providers: [ ItemService, LoginService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }