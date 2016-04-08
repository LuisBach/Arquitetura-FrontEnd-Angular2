import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./paginas/principal/app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {FamiliaServico} from "./servicos/familia.servico";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [ROUTER_PROVIDERS, FamiliaServico, HTTP_PROVIDERS]);