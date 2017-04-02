import { Component } from '@angular/core';

import { Entry } from './entry';
import { ENTRIES } from './mock-entry';

@Component({
    selector: 'my-dailylog',
    templateUrl: 'dailylog.component.html',
    styleUrls: ['dailylog.component.css'],
    moduleId: module.id
})

export class DailyLogComponent {
    entries: Entry[];
    text_placeholder: String = "Texte de votre entrée";

    constructor() {
        this.entries = ENTRIES;
    }
}
