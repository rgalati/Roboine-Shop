import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }         from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule }    from '@angular/http';
import { Data }  from './data/data';
import {ItemService }   from './itemService/itemService'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(Data)
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ItemService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }