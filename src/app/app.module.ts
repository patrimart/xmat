import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material";

import { AppComponent } from "./app.component";

import { XMatModule } from "../module/xmat.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    XMatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
