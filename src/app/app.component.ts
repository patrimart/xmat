import { Component } from "@angular/core";

@Component({
  selector: "xmat-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  state = "ready";

  public onClick(evt: string) {
    console.log("CLICK", evt);
    if (evt === "ok") {
      this.state = "loading";
      setTimeout(() => this.state = "ok", 5000);
      setTimeout(() => this.state = "ready", 15000);
    }
  }
}
