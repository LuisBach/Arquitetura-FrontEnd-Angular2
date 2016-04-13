import {Component, OnInit} from "angular2/core";
import {FamiliaServico} from "../../servicos/familia.servico";
import {Router, RouteParams} from "angular2/router";
import {Familia} from "../../modelos/familia";

@Component({
    templateUrl: "app/paginas/familia/familia-detalhes.html"
})

export class FamiliaDetalhesComponent implements OnInit {
    constructor(private _rota: Router, private _rotaParams: RouteParams, private _familiaServico: FamiliaServico) { }

    public familia: Familia;

    ngOnInit() {

        if (<number><any>this._rotaParams.get("id") > 0) {
            let id = <number><any>this._rotaParams.get("id");
            this._familiaServico.obterFamilia(id).subscribe(data => this.familia = data, error => console.log(error));
        }
        else {
            this.familia = new Familia();
        }
    }

    salvar(_familia: Familia) {
        
        this._familiaServico.incluirFamilia(_familia)
            .subscribe(data => {
                if (<number><any>data === 2) {
                    alert('Família já existe');
                }
                else {
                    alert('F');
                }
            },
            error => console.log(error),
            () => console.log('done'));
    }

    public voltar(): void {
        this._rota.navigate(["Familias"]);
    }
}