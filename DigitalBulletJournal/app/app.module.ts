import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DailyLogComponent } from './dailylog.component';
import { MonthlyLogComponent } from './monthlylog.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
  declarations: [
      AppComponent,
      DailyLogComponent,
      MonthlyLogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
