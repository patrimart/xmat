import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from "@angular/core";
export class XMatButtonConfirm {
    constructor(cdr) {
        this.cdr = cdr;
        this.color = "";
        this.raised = false;
        this.prompt = "Continue?";
        this.okIcon = "check";
        this.okColor = "primary";
        this.cancelIcon = "do_not_disturb";
        this.state = "ready";
        this.timeout = 3000;
        this.disabled = false;
        this.click = new EventEmitter();
    }
    onClick(type) {
        if (this.disabled) {
            return;
        }
        clearTimeout(this.timerRef);
        if (type === "prompt") {
            this.timerRef = setTimeout(() => {
                this.state = "ready";
                this.cdr.detectChanges();
            }, this.timeout);
        }
        this.state = type;
        this.click.emit(type);
    }
}
XMatButtonConfirm.decorators = [
    { type: Component, args: [{
                selector: "xmat-button-confirm",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: ["confirm.scss"],
                template: `
    <button mat-button class="xmat-button-confirm"
        [color]="color"
        [disabled]="disabled"
        [class.prompt]="state !== 'ready'"
        [class.ok]="state === 'ok'"
        [class.loading]="state === 'loading'"
        [class.mat-raised-button]="raised"
        [class.mat-button]="!raised"
    >
        <label (click)="onClick('prompt')"><ng-content></ng-content></label>
        <div>
            <label>{{ prompt }}</label>
            <i class="material-icons" (click)="onClick('ok')">{{ okIcon }}</i>
            <i class="material-icons" (click)="onClick('ready')">{{ cancelIcon }}</i>
            <div class="mat-form-field-ripple"
                [class.mat-primary]="okColor === 'primary'"
                [class.mat-accent]="okColor === 'accent'"
                [class.mat-warn]="okColor === 'warn'"
            >
                <i class="material-icons">{{ okIcon }}</i>
            </div>
            <mat-progress-bar mode="indeterminate" [color]="color"></mat-progress-bar>
        </div>
    </button>
    `,
            },] },
];
XMatButtonConfirm.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
XMatButtonConfirm.propDecorators = {
    'color': [{ type: Input },],
    'raised': [{ type: Input },],
    'prompt': [{ type: Input },],
    'okIcon': [{ type: Input },],
    'okColor': [{ type: Input },],
    'cancelIcon': [{ type: Input },],
    'state': [{ type: Input },],
    'timeout': [{ type: Input },],
    'disabled': [{ type: Input },],
    'click': [{ type: Output },],
};
//# sourceMappingURL=confrim.component.js.map