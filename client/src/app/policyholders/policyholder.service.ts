import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Policyholder } from './policyholder';

@Injectable({
    providedIn: 'root'
})
export class PolicyholderService {
    private baseURL = "http://localhost:8081/api/policyholders";

    constructor(private httpClient: HttpClient) { }

    getPolicyholders(): Observable<Policyholder[]> {
        return this.httpClient.get<Policyholder[]>(`${this.baseURL}`);
    }

    getPolicyholder(policyholderNumber: string): Observable<Policyholder> {
        return this.httpClient.get<Policyholder>(`${this.baseURL}/` + policyholderNumber);
    } 

    searchPolicyholders(searchTerm: string): Observable<Policyholder[]> {
        return this.httpClient.get<Policyholder[]>(`${this.baseURL}?searchTerm=` + searchTerm);
    }
}