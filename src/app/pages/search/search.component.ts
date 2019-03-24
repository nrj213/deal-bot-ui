import { Component, OnInit } from '@angular/core';
import { FlipkartService } from 'src/app/services/flipkart.service';
import { NgForm } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { DataService } from "../../services/data.service";

import { AppConstants } from '../../services/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private flipkartService: FlipkartService, private toasterService: ToasterService, private data: DataService) { }

  keywords: string = '';
  searchResults: any = [];

  ngOnInit() {
  }

  search(form: NgForm) {
    let keywords = form.value.keywords;

    if(keywords) {
      this.data.changeSpinnerFlag(true);
      this.searchResults = [];

      this.flipkartService.search(keywords).subscribe((data) => {
        console.log(data);
        this.searchResults = data;
        this.data.changeSpinnerFlag(false);
      }, (err) => {
        console.log(err);
       this.data.changeSpinnerFlag(false);
        this.toasterService.pop('error', '', AppConstants.MSGS['ERROR']);
      });
    } else {
      this.toasterService.pop('error', '', AppConstants.MSGS['KEYWORD_MISSING']);
    } 
  };

  clear() {
    this.keywords = '';
    this.searchResults = [];
  }

}
