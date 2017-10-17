import { EventEmitter, ChangeDetectorRef } from "@angular/core";
export declare class XMatButtonConfirm {
    private cdr;
    color: string;
    raised: boolean;
    prompt: string;
    okIcon: string;
    okColor: string;
    cancelIcon: string;
    state: string;
    timeout: number;
    disabled: boolean;
    click: EventEmitter<string>;
    private timerRef;
    constructor(cdr: ChangeDetectorRef);
    onClick(type: string): void;
}
