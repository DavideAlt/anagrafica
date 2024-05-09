import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ComuneDetailComponent } from './components/comune-detail/comune-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComuneSingleTableComponent } from './components/comune-single-table/comune-single-table.component';
import { ComuneDoubleTableComponent } from './components/comune-double-table/comune-double-table.component';
import { DialogNewPersonaComponent } from './components/dialog-new-persona/dialog-new-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ComuneDetailComponent,
    ComuneSingleTableComponent,
    ComuneDoubleTableComponent,
    DialogNewPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
