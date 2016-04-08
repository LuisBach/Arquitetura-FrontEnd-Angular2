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

    incluirFamilia(familia: Familia) {

        let body = JSON.stringify({ familia });
        
        console.log(JSON.stringify(familia));
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._apiUrl + "Familia/Incluir", JSON.stringify(familia), options)
            .map(res => res.json())
            .catch(this.throwError);
    }

    private throwError(response) {
        return Observable.throw(response.json().error || "Server error");
    }
}