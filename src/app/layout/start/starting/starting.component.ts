import { Component, OnInit } from "@angular/core";
declare let $;
@Component({
  selector: "app-starting",
  templateUrl: "./starting.component.html",
  styleUrls: ["./starting.component.scss"],
})
export class StartingComponent implements OnInit {
  constructor() {
    $("meta[name=viewport]").attr("content", "width=device-width");
  }

  ngOnInit() {
    var element = document.getElementById("na");
    element.classList.remove("mobile-menu-visible");
  }
}
