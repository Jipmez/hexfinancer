import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ng6-toastr-notifications";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "ngx-progressbar";
import { AngularWebStorageModule } from "angular-web-storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WrongComponent } from './wrong/wrong.component';

@NgModule({
  declarations: [AppComponent, WrongComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    //  LocalStorage,
    HttpClientModule,
    AngularWebStorageModule,
    FormsModule,
    NgProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
