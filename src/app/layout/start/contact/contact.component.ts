import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
declare let $;
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
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
}
