import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
declare var $;
@Component({
  selector: "app-onboard",
  templateUrl: "./onboard.component.html",
  styleUrls: ["./onboard.component.scss"],
})
export class OnboardComponent implements OnInit {
  user: any;
  constructor(private activate: ActivatedRoute) {}

  ngOnInit(): void {
    let data = this.activate.snapshot.data;
    this.user = data["news"].dep["message"][0]["username"];
    $(".win").trigger("play");
  }
}
