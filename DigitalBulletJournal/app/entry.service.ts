import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Entry } from './entry';


@Injectable()
export class EntryService {
    private entriesUrl = 'api/entries';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getEntries(): Promise<Entry[]> {

        var temp = this.http.get(this.entriesUrl).toPromise();

        var result = temp.then(response => JSON.parse(response.json()) as Entry[] ).catch(this.handleError);

        return result;
    }

    getEntry(id: number): Promise<Entry> {
        const url = `${this.entriesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Entry)
            .catch(this.handleError);
    }

    addEntry(entry: Entry): Promise<Entry> {
        return this.http
            .post(this.entriesUrl, JSON.stringify(entry), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Entry)
            .catch(this.handleError);
    }

    deleteEntry(entry: Entry): Promise<void> {
        const url = `${this.entriesUrl}/${entry.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    updateEntry(entry: Entry): Promise<Entry> {
        const url = `${this.entriesUrl}/${entry.id}`;
        return this.http
            .put(url, JSON.stringify(entry), { headers: this.headers })
            .toPromise()
            .then(() => entry)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
