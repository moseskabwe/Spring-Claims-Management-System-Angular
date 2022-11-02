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

    getClaim(claimNumber: string): Observable<Claim> {
        return this.httpClient.get<Claim>(`${this.baseURL}/` + claimNumber)
    }

    createClaim(claim: Claim, policyholderNumber: string, policyNumber: string): Observable<Object>{
       return this.httpClient.post(`http://localhost:8081/api/policyholders/` + policyholderNumber 
                                    + `/policies/` + policyNumber + `/claims`, claim)
    }
}