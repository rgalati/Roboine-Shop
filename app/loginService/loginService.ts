import { Injectable }   from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Login} from "../login/login";
import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class LoginService {
    logins:Login[];
    currentUser:{};
    constructor(private http: Http) {
    }

    private getLoginFromJson(obj: Login): Login{
        return new Login(
            obj.id, obj.username, obj.password, obj.email, obj.fName, obj.lName, obj.street, obj.npa, obj.city, obj.country, obj.phone)
    }

    getLogins(): Observable<Login[]> {
        return this.http.get('app/users').map((resp : Response) => {
            var fetchedLogin=[];
            for (let login of resp.json().data){
                fetchedLogin.push((this.getLoginFromJson(login)))
            }
            this.logins=fetchedLogin;
            return fetchedLogin as Array<Login>;
        });
    }

    checkLogin(username:String, password: String):boolean{
        for (var log of this.logins){
            if(log.username === username && log.password===password){
                this.setCurrentUser(log);
                return true;
            }else{
                return false;
            }
        }
    }

    getCurrentUser(): Login{
        this.currentUser=localStorage.getItem('current_User');
        var login = JSON.parse(this.currentUser.toString());
        return this.getLoginFromJson(login);

    }

    setCurrentUser(login:Login):void{
        localStorage.setItem('current_User',JSON.stringify(login));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}