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

    // TODO: Ajouter au serveur MongoDB
    addEntry(text: string) {
        var entry = new Entry();
        entry.text = text;

        this.EntryService.addEntry(entry).then(entry => {
            console.log(entry);
            this.entries.push(entry);
        });
    }

    // TODO: Supprimer du serveur MongoDB
    removeEntry(entry: Entry) {

        this.EntryService.deleteEntry(entry).then(() => {
            var index = this.entries.indexOf(entry);
            this.entries.splice(index, 1);
        });
    }
}
