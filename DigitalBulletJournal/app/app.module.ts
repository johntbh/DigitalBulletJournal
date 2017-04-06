import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyLogComponent } from './dailylog.component';
import { MonthlyLogComponent } from './monthlylog.component';
import { FuturLogComponent } from './futurlog.component';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppRoutingModule,
        ReactiveFormsModule,
      ],
  declarations: [
      AppComponent,
      DailyLogComponent,
      MonthlyLogComponent,
      FuturLogComponent,
      
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
