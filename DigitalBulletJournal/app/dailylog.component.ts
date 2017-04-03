import { Component, OnInit } from '@angular/core';

import { Entry } from './entry';
import { EntryService } from './entry.service';
import { ENTRIES } from './mock-entry';

@Component({
    selector: 'my-dailylog',
    templateUrl: 'dailylog.component.html',
    styleUrls: ['dailylog.component.css'],
    moduleId: module.id,
    providers: [EntryService]
})

export class DailyLogComponent {
    entries: Entry[];
    text_placeholder: String = "Texte de votre entrée";

    constructor(private EntryService: EntryService) { }

    ngOnInit(): void {
        console.log(ENTRIES);
        this.getEntries();
    }

    getEntries(): void{
        
        this.EntryService.getEntries().then(entries => this.entries = entries);
        
    }
}
