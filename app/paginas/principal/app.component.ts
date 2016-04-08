import {Component} from "angular2/core";
import {FamiliaListaComponent} from "../familia/familia-lista.component";
import {FamiliaDetalhesComponent} from "../familia/familia-detalhes.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: "my-app",
    templateUrl: "app/paginas/principal/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", name: "Familias", component: FamiliaListaComponent, useAsDefault: true },
    { path: "familia/:id", name: "FamiliaDetalhes", component: FamiliaDetalhesComponent }
])

export class AppComponent {

}