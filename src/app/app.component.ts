import { Component } from "@angular/core";

import { State } from "../module/buttons/confirm.component";

@Component({
  selector: "xmat-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  state = State.Ready;

  public onClick(evt: State) {
    console.log("CLICK", evt);
    if (evt === State.Ok) {
      this.state = State.Loading;
      setTimeout(() => this.state = State.Ok, 5000);
      setTimeout(() => this.state = State.Ready, 15000);
    }
  }
}
