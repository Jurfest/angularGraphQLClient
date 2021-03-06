import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-new-user',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  isLoadingProfiles: boolean = false;
  profiles: any[] = []; // TODO: - Strongly type with Profile class

  constructor() { }

  ngOnInit(): void {
  }

  getProfiles() {
    this.isLoadingProfiles = true;
    console.log("isLoading:", this.isLoadingProfiles);
    timer(2000).subscribe(() => {
      this.isLoadingProfiles = false;
    });
  }

}





  

