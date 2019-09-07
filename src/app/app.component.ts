import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GenericItem {
  name: string;
  images: any[];
}

interface Item {
  id: number;
  generic_item: GenericItem;
}

interface PageResponse {
  data: Item[];
  meta: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disabled = true;
  text = '';
  items: Item[] = [];

  constructor(
    public http: HttpClient,
  ) {

  }
  ngOnInit() {
    this.http.get<PageResponse>('https://spiza-app.com/api/v2/customerboard/items')
      .subscribe((response) => {
        console.log(response);
        this.items = response.data;
      });
  }
}
