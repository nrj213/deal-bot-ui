import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ToasterService } from 'angular2-toaster';
import { AppConstants } from '../../../services/constants';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private itemService: ItemService, private toasterService: ToasterService) { }

  @Input() searchResults: any;
  
  role: object = Role;

  ngOnInit() {
  }

  track(item) {
    this.itemService.save(item).subscribe((data) => {
      if(Object.keys(data).length) {
        this.toasterService.pop('success', data['name'], AppConstants.MSGS['TRACK']);
      } else {
        this.toasterService.pop('error', data['name'], AppConstants.MSGS['ALREADY_TRACKED']);
      }
    }, (err) => {
      console.log(err);
      this.toasterService.pop('error', '', AppConstants.MSGS['ERROR']);
    });
  }

}
