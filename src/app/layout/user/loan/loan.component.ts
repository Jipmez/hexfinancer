import { Component, OnInit } from "@angular/core";
declare var $;
@Component({
  selector: "app-loan",
  templateUrl: "./loan.component.html",
  styleUrls: ["./loan.component.scss"],
})
export class LoanComponent implements OnInit {
  constructor() {
    if ($(".toggled")) {
      $("#tog").click();
    }
  }

  ngOnInit(): void {}
}
