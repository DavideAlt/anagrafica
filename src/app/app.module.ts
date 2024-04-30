import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ComuneDetailComponent } from './components/comune-detail/comune-detail.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvinciaDetailComponent } from './components/provincia-detail/provincia-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ComuneDetailComponent,
    TableViewComponent,
    ProvinciaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
