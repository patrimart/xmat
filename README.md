# XMat -- Extra Material Design Components

More docs coming soon.

## Install

```bash
npm install -S xmat
```

Note: Requires `@angular/material v2.0.0-beta.12` or above.

## Usage

```typescript
// Import all XMat components.
import { XMatModule } from "xmat";

@NgModule({
  declarations: [ MyAppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    XMatModule,
  ],
  bootstrap: [ MyAppComponent ]
})
export class MyAppModule { }
```

## Buttons

### Confirm Button

Button with different states: Ready, Prompt, Loading and Ok.

#### Usage

```typescript
// Import only XMat button components.
import { XMatButtonsModule } from "xmat/buttons/";
import { State } from "xmat/buttons/confirm/";
```

```html
<xmat-button-confirm
    color="warn"
    [raised]="true"
    [disabled]="false"
    [state]="state"
    (click)="onClick($event)"
>Save Form</xmat-button-confirm>
```

| Inputs      | Type     | Default          | Description   |
|-------------|----------|------------------|---------------|
| state       | State    | State.Ready      |               |
| color       | string   | NONE             |               |
| raised      | boolean  | false            |               |
| prompt      | string   | "Continue?"      |               |
| okColor     | string   | "primary"        |               |
| okIcon      | string   | "check"          |               |
| cancelIcon  | string   | "do_no_disturb"  |               |
| timeout     | number   | 3000             |               |
| disabled    | boolean  | false            |               |

| Outputs  | Description                                    |
|----------|------------------------------------------------|
| click    | Fires an event when the button is clicked.     |
