import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DOCUMENT } from "@angular/common";
import { DataService } from "../../../data.service";

declare let $;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  deposit = [];
  withdraw = [];
  dep: any;
  with: any;
  user: any;
  promo: any;
  constructor(
    private server: DataService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    $("meta[name=viewport]").attr(
      "content",
      "width=device-width, initial-scale=1"
    );
  }

  ngOnInit() {
    this.server.render(
      this._renderer2,
      "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false"
    );

    let promo = {
      key: "promo",
    };
    this.server.Api(promo).subscribe((res) => {
      this.promo = res["message"][0]["status"];
    });

    this.myStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
      /*  "z-index": 1, */
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 150,
        },
        color: {
          value: "#FFD400",
        },
        shape: {
          type: "edge",
        },
      },
    };

    let user = {
      key: "invest",
    };
    this.server.Api(user).subscribe(
      (res) => {
        console.log(res);
        if ((res["code"] = 1)) {
          this.deposit = res["message"][0];
          this.withdraw = res["message"][1];
          this.dep = res["dep"];
          this.with = res["with"];
          this.user = res["user"];
        }
      },
      () => {},
      () => {}
    );
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    autoplay: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  ngAfterViewInit() {
    const s = this._renderer2.createElement("script");
    s.type = "text/javascript";
    s.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    s.async = true;
    let me = {
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "Nasdaq 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "BTC/USD",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "ETH/USD",
        },
      ],
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    };
    s.innerHTML = JSON.stringify(me);

    this._renderer2.appendChild(this._document.getElementById("sage"), s);

    /* Live trading  */

    /* Live trading  */

    const p = this._renderer2.createElement("script");
    p.type = "text/javascript";
    p.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    p.async = true;
    let te = {
      width: "100%",
      height: 400,
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    };
    p.innerHTML = JSON.stringify(te);

    this._renderer2.appendChild(this._document.getElementById("sagef"), p);

    /* Heat Map */

    const pt = this._renderer2.createElement("script");
    pt.type = "text/javascript";
    pt.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    pt.async = true;
    let tet = {
      width: "100%",
      height: "100%",
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    };
    pt.innerHTML = JSON.stringify(tet);

    this._renderer2.appendChild(this._document.getElementById("sageft"), pt);
  }
}
