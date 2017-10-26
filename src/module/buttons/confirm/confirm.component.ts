
import {
    Component, Input, Output, EventEmitter,
    ChangeDetectionStrategy, ChangeDetectorRef,
} from "@angular/core";

export enum State {
    Ready = "ready",
    Prompt = "prompt",
    Ok = "ok",
    Loading = "loading",
}

@Component({
    selector: "xmat-button-confirm",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: [ "confirm.scss" ],
    template: `
    <button mat-button class="xmat-button-confirm"
        [color]="color"
        [disabled]="disabled"
        [class.ready]="readyOn()"
        [class.prompt]="promptOn()"
        [class.ok]="okOn()"
        [class.loading]="loadingOn()"
        [class.transition]="transitionOn()"
        [class.mat-raised-button]="raised"
        [class.mat-button]="!raised"
    >
        <label (click)="onClick('prompt')"><ng-content></ng-content></label>
        <div class="prompt">
            <label>{{ prompt }}</label>
            <i class="material-icons" (click)="onClick('ok')">{{ okIcon }}</i>
            <i class="material-icons" (click)="onClick('ready')">{{ cancelIcon }}</i>
        </div>
        <div class="progress">
            <mat-progress-bar mode="indeterminate" [color]="color"></mat-progress-bar>
        </div>
        <div class="ok mat-form-field-ripple"
            [class.mat-primary]="okColor === 'primary'"
            [class.mat-accent]="okColor === 'accent'"
            [class.mat-warn]="okColor === 'warn'"
        >
            <i class="material-icons">{{ okIcon }}</i>
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
    @Input() public timeout = 3000;
    @Input() public disabled = false;
    @Input() public set state (s: State) {
        this.stateHistory = [ this.stateHistory[1], s ];
    }

    @Output() public click = new EventEmitter<State>();

    private stateHistory: [State, State] = [ State.Ready, State.Ready ];
    private timerRef: any;

    constructor (
        private cdr: ChangeDetectorRef,
    ) {}

    public readyOn (): boolean {
        return this.stateHistory[1] === State.Ready;
    }

    public promptOn (): boolean {
        return this.stateHistory[1] === State.Prompt
            || (this.stateHistory[0] === State.Prompt && this.stateHistory[1] === State.Ok);
    }

    public okOn (): boolean {
        return this.stateHistory[1] === State.Ok;
    }

    public transitionOn (): boolean {
        return (this.stateHistory[0] === State.Ready && this.stateHistory[1] === State.Prompt)
            || (this.stateHistory[0] === State.Prompt && this.stateHistory[1] === State.Ready);
    }

    public loadingOn (): boolean {
        return this.stateHistory[1] === State.Loading
            || (this.stateHistory[0] === State.Loading && this.stateHistory[1] === State.Ok);
    }

    public onClick (type: State) {

        if (this.disabled) { return; }

        clearTimeout(this.timerRef);

        if (type === State.Prompt) {
            this.timerRef = setTimeout(() => {
                this.state = State.Ready;
                this.cdr.detectChanges();
            }, this.timeout);
        }

        this.state = type;
        this.click.emit(type);
    }
}
