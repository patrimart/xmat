# XMat -- Extra Material Design Components

More coming soon.

## Install

```bash
npm i-S xmat
```

## Buttons

### Confirm Button

Button with different states.

```ts
@Input() public color = "";
@Input() public raised = false;
@Input() public prompt = "Continue?";
@Input() public okIcon = "check";
@Input() public okColor = "primary";
@Input() public cancelIcon = "do_not_disturb";
@Input() public timeout = 3000;
@Input() public disabled = false;
@Input() public state = State.Ready;
@Output() public click = new EventEmitter<State>();
```

