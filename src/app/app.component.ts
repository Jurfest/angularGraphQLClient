import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularGraphqlClient';

  constructor(private _loaderService: LoaderService) { }
  showLoading(): boolean {
    return this._loaderService.getLoading();
  }
}
