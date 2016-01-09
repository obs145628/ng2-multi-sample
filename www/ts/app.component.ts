import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PageAComponent} from "./pagea.component";
import {PageBComponent} from "./pageb.component";


@Component({
	selector: "my-app",
	templateUrl: "html/app.html",
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: "/pagea", name:"PageA", component: PageAComponent, useAsDefault: true},
	{path: "/pageb", name:"PageB", component: PageBComponent}
])

export class AppComponent
{	

}
