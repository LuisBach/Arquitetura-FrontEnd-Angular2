import {Familia} from "../modelos/familia";
import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class FamiliaServico {
    constructor(private _http: Http) { }

    private _apiUrl: string = "http://localhost:12697/interplayersapi/";

    obterFamilias() {
        return this._http.get(this._apiUrl + "Familia/Listar")
            .map(res => res.json())
            .catch(this.throwError);
    }

    obterFamilia(id: number) {
        return this._http.get(this._apiUrl + "Familia/ObterPorId/:id".replace(":id", id.toString()))
            .map(res => res.json())
            .catch(this.throwError);
    }

    private throwError(response) {
        return Observable.throw(response.json().error || "Server error");
    }
}