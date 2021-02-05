import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/authentication/tabs/tabs.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    LoginComponent,
    RegisterComponent,
    LoggedInUserComponent,
    ErrorsComponent,
    ChangeComponent,
    SearchComponent,
    DeleteComponent,
    ListComponent,
    NewComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
