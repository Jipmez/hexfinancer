import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-estate",
  templateUrl: "./estate.component.html",
  styleUrls: ["./estate.component.scss"],
})
export class EstateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var element = document.getElementById("na");
    element.classList.remove("d-block");
  }
}
