
import {
    Component, Input, Output, EventEmitter,
    ChangeDetectionStrategy, ChangeDetectorRef,
} from "@angular/core";


@Component({
    selector: "xmat-button-confirm",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: [ "confirm.scss" ],
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
})
export class XMatButtonConfirm {

    @Input() public color = "";
    @Input() public raised = false;
    @Input() public prompt = "Continue?";
    @Input() public okIcon = "check";
    @Input() public okColor = "primary";
    @Input() public cancelIcon = "do_not_disturb";

    @Input() public state = "ready";
    @Input() public timeout = 3000;
    @Input() public disabled = false;

    @Output() public click = new EventEmitter<string>();


    private timerRef: any;

    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

    public onClick (type: string) {

        if (this.disabled) { return; }

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
