import { Component, OnInit } from "@angular/core";
import { NgProgress } from "ngx-progressbar";
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { ToastrManager } from "ng6-toastr-notifications";
declare let $;
@Component({
  selector: "app-forgotpass",
  templateUrl: "./forgotpass.component.html",
  styleUrls: ["./forgotpass.component.scss"],
})
export class ForgotpassComponent implements OnInit {
  constructor(
    public ngProgress: NgProgress,
    private server: DataService,
    private toastr: ToastrManager
  ) {
    $("meta[name=viewport]").attr("content", "width=device-width");
  }

  ngOnInit() {
    var element = document.getElementById("na");
    element.classList.remove("mobile-menu-visible");

    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
  }

  forgotPass(x: NgForm) {
    var emailRe = /^.+@.+\..{2,4}$/;
    if (x.value.email.match(emailRe)) {
      let forgot = {
        email: x.value.email,
        key: "forgot",
      };
      this.server.Api(forgot).subscribe((res) => {
        if (res["code"] == 1) {
          this.toastr.successToastr("Message sent successfully", "Security");
          x.reset();
        } else if (res["code"] == 2) {
          this.toastr.warningToastr("Input a correct email", "Security");
          x.reset();
        }
        x.reset();
      });
    }
  }
}
