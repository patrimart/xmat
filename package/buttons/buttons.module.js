import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatProgressBarModule } from "@angular/material";
import { XMatButtonConfirm } from "./confrim.component";
export class XMatButtonsModule {
}
XMatButtonsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatProgressBarModule,
                ],
                declarations: [
                    XMatButtonConfirm,
                ],
                exports: [
                    XMatButtonConfirm,
                ],
            },] },
];
XMatButtonsModule.ctorParameters = () => [];
//# sourceMappingURL=buttons.module.js.map