import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { DataService } from "../../../data.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { SessionStorageService } from "angular-web-storage";

declare let $;
@Component({
  selector: "app-deposit",
  templateUrl: "./deposit.component.html",
  styleUrls: ["./deposit.component.scss"],
})
export class DepositComponent implements OnInit {
  currentUrl: string;
  acc: any;
  plan: any;
  users: any;
  profit: any;
  Id: any;
  amount: any;
  term: any;
  paymethod: any;
  ammethod: any;
  percent: any;
  netprofit: any;
  amountTopay: any;
  addressTopay: any;
  pucg: number = 0;
  show = 1;
  country: any;
  promo: any;
  display: number = 0;
  bank: any;
  tic: any;
  banks: any;
  rand: any;
  amm: any;
  money = 0;
  options: any;

  constructor(
    private server: DataService,
    public toastr: ToastrManager,
    public session: SessionStorageService,
    private route: Router,
    private activate: ActivatedRoute
  ) {
    route.events.subscribe((_: NavigationEnd) => (this.currentUrl = _.url));

    if ($(".toggled")) {
      $("#tog").click();
    }
  }

  ngOnInit() {
    $("meta[name=viewport]").attr(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    );
    this.Id = this.session.get("sessionID");
    let data = this.activate.snapshot.data;
    this.acc = data["news"].dep["message"][0]["mainaccountbal"];
    this.country = data["news"].dep["message"][0]["country"];
    this.promo = data["news"].promo["message"][0]["status"];

    this.users = data["news"].dep["message"][0]["username"];
    this.display = 0;
    this.bank = 0;
  }

  calculate(x: NgForm) {
    this.options = this.options;
    let Deposit = parseInt(x.value.deposit);
    let spendFrom = x.value.spend;

    if (this.options == "crypto1") {
      this.term = 1;
      if (Deposit >= 100 && Deposit <= 1000) {
        this.profit = Math.floor(Deposit * 1.1);
        this.percent = 1.1;
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 1.15);
        this.percent = 1.15;
      }
    }

    if (this.options == "crypto2") {
      this.term = 2;
      if (Deposit >= 1000 && Deposit <= 10000) {
        this.profit = Math.floor(Deposit * 1.15);
        this.percent = 1.15;
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 1.3);
        this.percent = 1.3;
      }
    }
    if (this.options == "crypto3") {
      this.term = 7;
      if (Deposit >= 10000) {
        this.profit = Math.floor(Deposit * 1.3);
        this.percent = 1.3;
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 2.0);
        this.percent = 2.0;
      }
    }

    if (this.options == "estate") {
      this.term = 7;
      if (Deposit >= 100000) {
        this.profit = Math.floor(Deposit * 2.2);
        this.percent = 2.2;
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 3.0);
        this.percent = 3.0;
      }
    }

    /*     if (this.options == "PREMUIM") {
      this.term = 5;
      if (Deposit >= 500 && Deposit <= 2999) {
        this.profit = Math.floor(Deposit * 4.0);
        this.percent = 5.0;
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 4.0);
        this.percent = 5.0;
      }
    }

    if (this.options == "PREMUIM EXTRA") {
      this.term = 5;
      if (Deposit >= 3000) {
        this.profit = Math.floor(Deposit * 4.0) + 4000;
        this.percent = (((this.profit / Deposit) * 100) / 100).toFixed(2);

        console.log(this.percent);
      } else {
        return this.toastr.warningToastr(
          `$${Deposit} not avalable for this plan`
        );
        this.profit = Math.floor(Deposit * 4.0) + 4000;
        this.percent = (((this.profit / Deposit) * 100) / 100).toFixed(2);
      }
    } */

    this.netprofit = this.profit - Deposit;
    this.ammethod = Deposit;
    this.plan = this.options;
    this.paymethod = spendFrom;

    this.display = 1;
    this.money = 2;
  }

  atLeastOneRadio() {
    if (this.options == null) {
      this.toastr.warningToastr("Select an investment scheme", "security");
    } else {
      return true;
    }
  }

  atLeastOneRadiodis() {
    if ($("input[type=select]:selected").length > 0) {
      return true;
    } else {
      return false;
    }
  }
  chek() {
    if (this.options == null) {
      return false;
    } else {
      return true;
    }
  }

  Deposit() {
    if (
      this.paymethod == "BTC" ||
      this.paymethod == "USDT(ERC20)" ||
      this.paymethod == "BNB" ||
      (this.paymethod == "ETH" && this.netprofit && this.ammethod && this.plan)
    ) {
      let med = {
        user_id: this.Id,
        plan: this.plan,
        profit: this.profit,
        amount: this.ammethod,
        username: this.users,
        paymethod: this.paymethod,
        percent: this.percent,
        key: "depoBitcoin",
      };

      this.server.Api(med).subscribe((res) => {
        if (res["message"]) {
          this.toastr.infoToastr(res["message"], "security");
        }
        if (res["code"] == 1) {
          this.amountTopay = res["amount_btc"];
          this.addressTopay = res["address"];
          this.tic = res["tic"];
          this.bank = 2;
        }
      });
    } else if (
      this.paymethod == "Bank" &&
      this.netprofit &&
      this.ammethod &&
      this.plan
    ) {
      let med = {
        user_id: this.Id,
        plan: this.plan,
        profit: this.profit,
        amount: this.ammethod,
        username: this.users,
        paymethod: this.paymethod,
        percent: this.percent,
        key: "depoBank",
      };
      this.server.Api(med).subscribe(
        (res) => {
          if (res["message"]) {
            this.toastr.infoToastr(res["message"], "security");
          }
          if (res["code"] == 1) {
            this.banks = res["banks"];
            this.rand = res["payment"];
            this.amm = "₹" + res["amount"] * 76;
            // this.amm = Number(this.amm.toPrecision(2));
            this.bank = 1;
          }
        },
        () => {},
        () => {}
      );
    } else {
      if (
        this.paymethod == "Account" &&
        this.netprofit &&
        this.ammethod &&
        this.plan
      ) {
        let payload = {
          plan: this.plan,
          username: this.users,
          profit: this.profit,
          amount: this.ammethod,
          paymethod: this.paymethod,
          val: this.Id,
          percent: this.percent,
          key: "depo",
        };
        this.server.Api(payload).subscribe((res) => {
          if (res["message"]) {
            this.toastr.infoToastr(res["message"], "security");
          }
          if (res["code"] == 1) {
            this.toastr.successToastr("Your Deposit is Accepted", null, {
              animate: "fade",
            });
          }

          if (res["code"] == 2) {
            this.toastr.warningToastr(
              "You have insufficent funds in your wallet for this plan",
              null,
              { animate: "fade" }
            );
          }

          if (res["code"] == 3) {
            this.toastr.errorToastr(
              "Deposit not accepted, you have an active deposite",
              null,
              { animate: "fade" }
            );
          }
        });
      } else {
        this.toastr.errorToastr("Please select an amount", "Security Center");
      }
    }
  }

  copy() {
    /* Get the text field */
    console.log("me");
    var copyText = $("#refUrl");

    console.log(copyText);
    /* Select the text field */
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobi
    /* Copy the text inside the text field */
    document.execCommand("copy");
    this.toastr.successToastr("Link copied");
  }
}
