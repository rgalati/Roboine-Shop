import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { ItemComponent }                from './item/item.component';
import { HomeComponent }                from './home/home.component';
import { TraitementCommandeComponent }  from './traitementCommande/traitementCommande.component';
import {LoginComponent} from "./login/login.component";
import {AccompteComponent} from "./accompte/accompte.component";
import {CommandeComponent} from "./commande/commande.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'item/:id',
        component: ItemComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'cart',
        component: TraitementCommandeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'accompte',
        component: AccompteComponent
    },
    {
        path: 'commande',
        component: CommandeComponent
    },
    {
        path:'register',
        component: RegisterComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}