import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getUsers() {
    // console.log(this.$api);
    this.isLoading = true;
    console.log("isLoading:", this.isLoading);
    timer(2000).subscribe(() => {
      this.isLoading = false;
    });

  }

}
