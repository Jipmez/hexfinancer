import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crypto",
  templateUrl: "./crypto.component.html",
  styleUrls: ["./crypto.component.scss"],
})
export class CryptoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var element = document.getElementById("na");
    element.classList.remove("d-block");
  }
}
