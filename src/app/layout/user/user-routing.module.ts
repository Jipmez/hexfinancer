import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "../user/dashboard/dashboard.component";
import { DashcontentComponent } from "../user/dashcontent/dashcontent.component";
import { DashcontentserviceService } from "../user/dashcontent/dashcontentservice.service";
import { ReferralService } from "../user/referral/referral.service";
import { DashboardserviceService } from "../user/dashboard/dashboardservice.service";
import { DepositComponent } from "../user/deposit/deposit.component";
import { WithdrawalComponent } from "../user/withdrawal/withdrawal.component";
import { ReferralComponent } from "../user/referral/referral.component";

import { ProfileComponent } from "../user/profile/profile.component";
import { LoanComponent } from "./loan/loan.component";

const routes: Routes = [
  // { path: "dashboard", redirectTo: "morr", pathMatch: "full" },

  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashcontentComponent,
        resolve: {
          news: DashcontentserviceService,
        },
      },
      {
        path: "dashcontent",
        component: DashcontentComponent,
        resolve: {
          news: DashcontentserviceService,
        },
      },
      {
        path: "deposit",
        component: DepositComponent,
        resolve: {
          news: DashboardserviceService,
        },
      },
      {
        path: "withdrawal",
        component: WithdrawalComponent,
        resolve: {
          news: DashcontentserviceService,
        },
      },
      {
        path: "affiliate",
        component: ReferralComponent,
        resolve: {
          ref: ReferralService,
        },
      },
      {
        path: "profile",
        component: ProfileComponent,
        resolve: {
          news: DashboardserviceService,
        },
      },
      {
        path: "loan",
        component: LoanComponent,
      },
    ],
    resolve: {
      news: DashboardserviceService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
