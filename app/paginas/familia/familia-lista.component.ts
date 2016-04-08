import {Component, OnInit} from "angular2/core";
import {Familia} from "../../modelos/familia";
import {FamiliaDetalhesComponent} from "./familia-detalhes.component";
import {Router} from "angular2/router";
import {FamiliaServico} from "../../servicos/familia.servico";

@Component({
    templateUrl: "app/paginas/familia/familia-lista.html",
    directives: [FamiliaDetalhesComponent]

})

export class FamiliaListaComponent implements OnInit {
    public title: string = "Cadastro de Famílias";
    public familias: Familia[] = [];

    constructor(private _familiaServico: FamiliaServico, private _rota: Router) { }

    ngOnInit() {            
        this._familiaServico.obterFamilias()
            .subscribe(data => this.familias = data, error => console.log(error));            
    }

    public onSelect(familia: Familia): void {
        this._rota.navigate(["FamiliaDetalhes", { id: familia.Id }]);
    }
}