import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../start/home/home.component";
import { NavComponent } from "../start/nav/nav.component";
import { RegisterComponent } from "../start/register/register.component";
import { LoginComponent } from "../start/login/login.component";
import { ContactComponent } from "../start/contact/contact.component";
import { FaqComponent } from "./faq/faq.component";
import { StartingComponent } from "./starting/starting.component";
import { ForgotpassComponent } from "./forgotpass/forgotpass.component";
import { ResetComponent } from "./reset/reset.component";
import { PromoComponent } from "./promo/promo.component";
import { EstateComponent } from "./estate/estate.component";
import { CryptoComponent } from "./crypto/crypto.component";
import { OnboardComponent } from "./onboard/onboard.component";
import { DashboardserviceService } from "../user/dashboard/dashboardservice.service";

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "faq", component: FaqComponent },
      { path: "contact", component: ContactComponent },
      { path: "terms", component: StartingComponent },
      { path: "how_it_works", component: PromoComponent },
      { path: "login", component: LoginComponent },
      { path: "signup", component: RegisterComponent },
      { path: "about", component: StartingComponent },
      { path: "reset_pass", component: ResetComponent },
      { path: "forgot_pass", component: ForgotpassComponent },
      { path: "real-estate", component: EstateComponent },
      { path: "crypto", component: CryptoComponent },
    ],
  },

  {
    path: "onboarding",
    component: OnboardComponent,
    resolve: {
      news: DashboardserviceService,
    },
  },

  /*  {
    path: "**",
    component: HomeComponent
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}
