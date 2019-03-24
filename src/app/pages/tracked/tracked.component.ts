import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ToasterService } from 'angular2-toaster';
import { AppConstants } from '../../services/constants';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-tracked',
  templateUrl: './tracked.component.html',
  styleUrls: ['./tracked.component.css']
})
export class TrackedComponent implements OnInit {

  constructor(private itemService: ItemService, private toasterService: ToasterService, private data: DataService) { }

  ngOnInit() {
    this.getTrackedItems();
  }

  trackedItems: any = [];

  getTrackedItems() {
    this.data.changeSpinnerFlag(true);

    this.itemService.get().subscribe((data) => {
      console.log(data);
      this.trackedItems = data;
      this.data.changeSpinnerFlag(false);
    }, (err) => {
      console.log(err);
      this.data.changeSpinnerFlag(false);
      this.toasterService.pop('error', '', AppConstants.MSGS['ERROR']);
    });
  }

  untrack(id) {
    this.data.changeSpinnerFlag(true);

    this.itemService.delete(id).subscribe((data) => {
      this.toasterService.pop('success', data['name'], AppConstants.MSGS['UNTRACK']);
      this.getTrackedItems();
      this.data.changeSpinnerFlag(false);
    }, (err) => {
      console.log(err);
      this.data.changeSpinnerFlag(false);
      this.toasterService.pop('error', '', AppConstants.MSGS['ERROR']);
    });
  }

  calculateOff(originalPrice, currentPrice) {
    return Math.ceil(((originalPrice-currentPrice)/originalPrice)*100) + '%';
  }
}
