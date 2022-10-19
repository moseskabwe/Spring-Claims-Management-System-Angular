import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Claim } from './claim';

@Injectable({
    providedIn: 'root'
})
export class ClaimService {
    private baseURL = "http://localhost:8081/api/claims";

    constructor(private httpClient: HttpClient) { }

    getClaimList(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(`${this.baseURL}`);
    }

    getDashboardClaimList(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(`${this.baseURL}/dashboard`);
    }
}