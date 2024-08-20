import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
declare let $;
@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  constructor(private _location: Location) {
    $("meta[name=viewport]").attr("content", "width=device-width");
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    var element = document.getElementById("na");
    element.classList.remove("mobile-menu-visible");
  }

  faq_tog(x, p) {
    if ($(x).hasClass("d-block")) {
      $(x).removeClass("d-block");
    } else {
      $(x).addClass("d-block");
    }
  }
}
