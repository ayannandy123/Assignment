import { NgModule } from "@angular/core";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';


@NgModule({
    declarations: [C1Component,C2Component, C3Component, C4Component
    ],
    exports: [C1Component,C2Component,C3Component,C4Component],
    imports: []
})
export class ComponentsModule {

}