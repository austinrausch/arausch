import { Component, OnInit } from "@angular/core";
import * as FileSaver from "file-saver";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  animations: [
    trigger("fade1", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(750, style({ opacity: 1 })),
      ]),
    ]),
    trigger("fade2", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(1500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  downloadResume() {
    var oReq = new XMLHttpRequest();
    // The Endpoint of your server
    var URLToPDF = "./../../assets/files/Austin Rausch Resume 10_26_20.pdf";

    // Configure XMLHttpRequest
    oReq.open("GET", URLToPDF, true);

    // Important to use the blob response type
    oReq.responseType = "blob";

    // When the file request finishes
    // Is up to you, the configuration for error events etc.
    oReq.onload = function () {
      // Once the file is downloaded, open a new window with the PDF
      // Remember to allow the POP-UPS in your browser
      var file = new Blob([oReq.response], {
        type: "application/pdf",
      });

      // Generate file download directly in the browser !
      FileSaver.saveAs(file, "Austin Rausch Resume");
    };

    oReq.send();
    // var blob = new Blob(, {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs("../../../assets/files/Austin Rausch Resume 3-12-19.pdf", "Austin Rausch Resume 3-12-19.pdf");
  }
}
