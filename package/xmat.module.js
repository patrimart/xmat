import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { XMatButtonsModule } from "./buttons/buttons.module";
import { XMatButtonConfirm } from "./buttons/confrim.component";
export class XMatModule {
}
XMatModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    XMatButtonsModule,
                ],
                exports: [
                    XMatButtonConfirm,
                ]
            },] },
];
XMatModule.ctorParameters = () => [];
//# sourceMappingURL=xmat.module.js.map