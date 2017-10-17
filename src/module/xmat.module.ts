
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { XMatButtonsModule } from "./buttons/buttons.module";
import { XMatButtonConfirm } from "./buttons/confrim.component";


@NgModule({
    imports: [
        CommonModule,
        XMatButtonsModule,
    ],
    exports: [
        XMatButtonConfirm,
    ]
})
export class XMatModule {}
