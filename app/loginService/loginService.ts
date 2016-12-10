import { Injectable }   from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Login} from "../login/login";
import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class LoginService {

    constructor(private http: Http) {
    }

    private getLoginFromJson(obj: Login): Login{
        return new Login(
            obj.id, obj.username, obj.password)
    }

    getLogins(): Observable<Login[]> {
        return this.http.get('app/users').map((resp : Response) => {
            var fetchedLogin=[];
            for (let login of resp.json().data){
                fetchedLogin.push((this.getLoginFromJson(login)))
            }
            console.log(fetchedLogin[0].username);
            return fetchedLogin as Array<Login>;
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}