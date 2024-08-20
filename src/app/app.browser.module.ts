import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ng6-toastr-notifications";
import { FormsModule } from "@angular/forms";
//import { LocalStorage } from "@ngx-pwa/local-storage";

import { NgProgressModule } from "ngx-progressbar";
import { AngularWebStorageModule } from "angular-web-storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TransferHttpCacheModule } from "@nguniversal/common";
import { AppModule } from "./app.module";

@NgModule({
  imports: [
    //BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

    //  LocalStorage,
    HttpClientModule,
    AngularWebStorageModule,
    FormsModule,
    NgProgressModule,
    TransferHttpCacheModule,
    AppModule,
    BrowserTransferStateModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
