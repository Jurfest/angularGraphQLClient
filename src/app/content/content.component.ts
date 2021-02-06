import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  tab: string = "home";
  isLoading: boolean = false;
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    console.log("isLoading:", this.isLoading);
    timer(2000).subscribe(() => {
      this.isLoading = false;
      this.isLoggedIn = !this.isLoggedIn;
    });

  }

}




  