import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Claim } from '../claims/claim';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private baseURL = "http://localhost:8081/api/claims/dashboard";

    constructor(private httpClient: HttpClient) { }

    getDashboardClaimList(): Observable<Claim[]> {
        return this.httpClient.get<Claim[]>(`${this.baseURL}`);
    }

    getDashboardStats(): Observable<Number[]> {
        return this.httpClient.get<Number[]>(`${this.baseURL}/stats`);
    }
}