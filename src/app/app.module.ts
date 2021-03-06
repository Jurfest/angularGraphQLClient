import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabsComponent } from './components/authentication/tabs/tabs.component';
import { TabsComponentProfile } from './components/profile/tabs/tabs.component';
import { TabsComponentUser } from './components/user/tabs/tabs.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoggedInUserComponent } from './components/authentication/logged-in-user/logged-in-user.component';
import { ErrorsComponent } from './components/shared/errors/errors.component';
import { ChangeComponent } from './components/user/change/change.component';
import { SearchComponent } from './components/user/search/search.component';
import { DeleteComponent } from './components/user/delete/delete.component';
import { ListComponent } from './components/user/list/list.component';
import { NewComponent } from './components/user/new/new.component';
import { ContentComponent } from './content/content.component';
import { AuthInterceptor } from './core/auth.interceptor';
import { LoaderService } from './services/loader.service';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabsComponentProfile,
    TabsComponentUser,
    LoginComponent,
    RegisterComponent,
    LoggedInUserComponent,
    ErrorsComponent,
    ChangeComponent,
    SearchComponent,
    DeleteComponent,
    ListComponent,
    NewComponent,
    ContentComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
