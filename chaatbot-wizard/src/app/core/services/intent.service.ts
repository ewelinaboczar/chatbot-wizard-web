import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intent } from '../../models/intent.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IntentService {
    private intentsPath: string = '/assets/intents.json';

    constructor(private http: HttpClient) { }

    getIntents(): Observable<Intent[]> {
        return this.http.get<Intent[]>(this.intentsPath);
    }
}
