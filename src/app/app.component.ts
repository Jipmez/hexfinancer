import { Component } from "@angular/core";
import { DataService } from "./data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "initial";

  load: boolean;
  constructor(private server: DataService) {
    this.load = this.server.loader.isLoading;

    console.log(this.load);
  }
}
