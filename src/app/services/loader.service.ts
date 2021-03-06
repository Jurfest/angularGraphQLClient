import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading = false;
  private loads: string[] = [];

  // A BehaviorSubject is an Observable with a default value
  // public isLoading = new BehaviorSubject(false);

  constructor() { }

  getLoading() {
    return this.loading;
  }

  openLoading(name?: string): void {
    if (name) {
      this.loads.push(name);
    }
    Promise.resolve(null).then(() => {
      this.loading = true;
    });
  }

  closeLoading(name?: string) {
    let index;
    if (name) {
      index = this.loads.indexOf(name);
    } else {
      index = -1;
    }
    if (index >= 0) {
      this.loads.splice(index, 1);
    }

    if (!this.loads.length) {
      Promise.resolve(null).then(() => {
        this.loading = false;
      });
    }
  }

  /**
   * Force loading to end in case of exception
   */
  // NOTE: - Under test (perhaps not a good idea)
  emptyLoadslist() {
    this.loads = [];
    this.loading = false;
  }

}