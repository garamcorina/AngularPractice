import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  event = "click";

  @ViewChild("divId", { static: true }) div!: ElementRef;

  buttonSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    this.buttonClick(this.event);
  }

  buttonClick(event: any) {
    this.buttonSubscription = fromEvent(
      this.div.nativeElement,
      event
    ).subscribe((res: any) => {
      alert(
        `You clicked on point with coordinates: \n X=${res.pageX} and Y=${res.pageY}`
      );
    });
  }
}