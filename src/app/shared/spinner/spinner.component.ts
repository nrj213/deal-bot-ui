import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private data: DataService) { }

  showSpinner = false;

  ngOnInit() {
    this.data.spinnerFlag.subscribe(flag => this.showSpinner = flag)
  }

}
