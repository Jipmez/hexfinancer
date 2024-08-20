import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { DataService } from "../../../data.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { SessionStorageService } from "angular-web-storage";

declare var $;
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  currentUrl: string;
  username: any;
  fullname: any;
  email: any;
  log: any;
  sign: any;
  location: string;
  bitad: any;
  Id: any;
  bank: any;
  country: any;
  profileId: any;
  bankk: string;
  phone: any;
  refuser: string;
  refloc: string;
  refdate: string;
  num: any;
  sum: any;
  ether: any;
  usdt: any;
  usdterc: any;
  usdttrc: any;
  en: any;
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

    this.location = window.location.origin;
    this.Id = this.session.get("sessionID");

    $("meta[name=viewport]").attr(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    );

    this.activate.queryParams.subscribe((res) => {
      if (res.hasOwnProperty("change")) {
        this.en = res.change;
      }
    });
  }
  ngOnInit() {
    let data = this.activate.snapshot.data;
    console.log(data);
    this.username = data["news"].dep["message"][0]["username"];
    this.profileId = data["news"].dep["message"][0]["profileId"];
    this.fullname = data["news"].dep["message"][0]["fullname"];
    this.email = data["news"].dep["message"][0]["email"];
    this.log = data["news"].dep["message"][0]["last_login"];
    this.country = data["news"].dep["message"][0]["country"];
    this.sign = data["news"].dep["message"][0]["date_created"];
    this.bank = data["news"].dep["message"][0]["bank"];
    this.bitad = data["news"].dep["message"][0]["bitcoinaddress"]
      ? data["news"].dep["message"][0]["bitcoinaddress"]
      : "Not set";
    this.ether = data["news"].dep["message"][0]["etheraddress"]
      ? data["news"].dep["message"][0]["etheraddress"]
      : "Not set";
    this.usdt = data["news"].dep["message"][0]["usdtaddress"]
      ? data["news"].dep["message"][0]["usdtaddress"]
      : "Not set";

    this.usdterc = data["news"].dep["message"][0]["usdtercaddress"]
      ? data["news"].dep["message"][0]["usdtercaddress"]
      : "Not set";

    this.usdttrc = data["news"].dep["message"][0]["usdttrcaddress"]
      ? data["news"].dep["message"][0]["usdttrcaddress"]
      : "Not set";
    this.phone = data["news"].dep["message"][0]["phone"];

    if (data["news"].ref["refid"] == 0 || null || "") {
      this.refuser = "None";
      this.refloc = "None";
      this.refdate = "None";
    } else {
      this.refuser = data["news"].ref["refid"][0]["username"];
      this.refloc = data["news"].ref["refid"][0]["country"];
      this.refdate = data["news"].ref["refid"][0]["date_created"];
    }

    this.num = data["news"].ref["refNum"];
    this.sum = data["news"].ref["refSum"];
    //this.username = data["news"].ref["username"];
  }

  update(x: NgForm) {
    let bank = [];
    if (x.value.bankname) {
      if (
        x.value.bankname &&
        x.value.bankacc &&
        x.value.banknum &&
        x.value.bankifsc
      ) {
        bank.push(x.value.bankname);
        bank.push(x.value.bankacc);
        bank.push(x.value.banknum);
        bank.push(x.value.bankifsc);

        this.bankk = bank.join("-");

        let payload = {
          bitcoinaddress: x.value.bitad == "" ? this.bitad : x.value.bitad,
          etheraddress: x.value.ether == "" ? this.ether : x.value.ether,
          usdtaddress: x.value.usdt == "" ? this.usdt : x.value.usdt,
          usdtercaddress:
            x.value.usdterc == "" ? this.usdterc : x.value.usdterc,
          usdttrcaddress:
            x.value.usdttrc == "" ? this.usdttrc : x.value.usdttrc,
          bank: this.bankk == "" ? this.bank : this.bankk,
          password: x.value.cpass,
          newpass: x.value.newpass,
          Id: this.Id,
          key: "proUp",
        };

        this.server.Api(payload).subscribe(
          (res) => {
            console.log(res);
            if (res["code"] == 1) {
              this.toastr.successToastr(
                "Your profile has been updated succesfully",
                null,
                { animate: "fade" }
              );

              $("#close").click();

              this.route.navigate(["/dashboard"]);
            }
            if (res["code"] == 2) {
              this.toastr.warningToastr(
                "please provide a correct password",
                null,
                {
                  animate: "fade",
                }
              );
            }
          },
          () => {},
          () => {}
        );
      } else {
        return this.toastr.warningToastr("Complete your bank details");
      }
    } else {
      let payload = {
        bitcoinaddress: x.value.bitad == "" ? this.bitad : x.value.bitad,
        etheraddress: x.value.ether == "" ? this.ether : x.value.ether,
        usdtaddress: x.value.usdt == "" ? this.usdt : x.value.usdt,
        usdtercaddress: x.value.usdterc == "" ? this.usdterc : x.value.usdterc,
        usdttrcaddress: x.value.usdttrc == "" ? this.usdttrc : x.value.usdttrc,
        bank: this.bankk == "" ? this.bank : this.bankk,
        password: x.value.cpass,
        newpass: x.value.newpass,
        fullname: x.value.fullname == "" ? this.fullname : x.value.fullname,
        phone: x.value.phone == "" ? this.phone : x.value.phone,
        Id: this.Id,
        key: "proUp",
      };

      this.server.Api(payload).subscribe(
        (res) => {
          console.log(res);
          if (res["code"] == 1) {
            this.toastr.successToastr(
              "Your profile has been updated succesfully",
              null,
              { animate: "fade" }
            );

            $("#close").click();

            this.route.navigate(["/dashboard"]);
          }
          if (res["code"] == 2) {
            this.toastr.warningToastr(
              "please provide a correct password",
              null,
              {
                animate: "fade",
              }
            );
          }
        },
        () => {},
        () => {}
      );
    }
  }

  copy() {
    /* Get the text field */
    console.log("me");
    var copyText = $("#refUrl");
    /* Select the text field */
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobi
    /* Copy the text inside the text field */
    document.execCommand("copy");
    this.toastr.successToastr("Link copied");
  }
}
