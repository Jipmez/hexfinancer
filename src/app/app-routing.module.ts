import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WrongComponent } from "./wrong/wrong.component";
const routes: Routes = [
  { path: "", loadChildren: "./layout/start/start.module#StartModule" },
  {
    path: "hkgjiinif684080ngi98084g06",
    loadChildren: "./layout/admin/admin.module#AdminModule",
  },
  {
    path: "dashboard",
    loadChildren: "./layout/user/user.module#UserModule",
  },

  {
    path: "**",
    pathMatch: "full",
    component: WrongComponent,
  },
  /*   {
    path: "dashboard",
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
          news: DashcontentserviceService,
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
    ],
    resolve: {
      news: DashboardserviceService,
    },
  },
 */
  /*  {
    path: "**",
    component: HomeComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
