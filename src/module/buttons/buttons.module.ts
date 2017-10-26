
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatProgressBarModule } from "@angular/material";

import { XMatButtonConfirm } from "./confirm/confirm.component";


@NgModule({
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
})
export class XMatButtonsModule {}
