import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyLogComponent } from './dailylog.component';
import { MonthlyLogComponent } from './monthlylog.component';
import { FuturLogComponent } from './futurlog.component';

const routes: Routes = [
    { path: '', redirectTo: 'dailylog', pathMatch: 'full' },
    { path: 'dailylog', component: DailyLogComponent },
    { path: 'monthlylog', component: MonthlyLogComponent },
     { path: 'futurlog', component: FuturLogComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
