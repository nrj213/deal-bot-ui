import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  keywords: string = '';
  searchResults: any = [];

  ngOnInit() {
  }

  search = () => {
    console.log(this.keywords);
    this.itemService.search(this.keywords).subscribe((data) => {
      console.log(data);
      this.searchResults = data;
    }, (err) => {
      console.log(err);
    });
  };
}
