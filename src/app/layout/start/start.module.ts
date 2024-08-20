import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ng6-toastr-notifications";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgProgressModule } from "ngx-progressbar";
import { FormsModule } from "@angular/forms";

import { AngularWebStorageModule } from "angular-web-storage";

import { HomeComponent } from "../start/home/home.component";
import { NavComponent } from "../start/nav/nav.component";
import { RegisterComponent } from "../start/register/register.component";
import { LoginComponent } from "../start/login/login.component";
import { ContactComponent } from "../start/contact/contact.component";
import { StartRoutingModule } from "./start-routing.module";
import { FaqComponent } from "./faq/faq.component";
import { StartingComponent } from "./starting/starting.component";
import { ForgotpassComponent } from "./forgotpass/forgotpass.component";
import { ResetComponent } from "./reset/reset.component";
import { PromoComponent } from "./promo/promo.component";
import { CryptoComponent } from "./crypto/crypto.component";
import { EstateComponent } from "./estate/estate.component";

import { OnboardComponent } from "./onboard/onboard.component";

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    FaqComponent,
    StartingComponent,
    ForgotpassComponent,
    PromoComponent,
    ResetComponent,
    CryptoComponent,
    EstateComponent,
    OnboardComponent,
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    NgProgressModule,
    ToastrModule.forRoot(),
    CarouselModule,
    HttpClientModule,

    AngularWebStorageModule,
    FormsModule,
  ],
  providers: [],
})
export class StartModule {}
