import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DeclinedClaim } from './declinedclaim';

@Injectable({
    providedIn: 'root'
})
export class DeclinedClaimService {
    constructor(private httpClient: HttpClient) { }

    declineClaim(declinedClaim: DeclinedClaim, claimNumber: string): Observable<DeclinedClaim>{
       return this.httpClient.post<DeclinedClaim>(`http://localhost:8081/api/claims/` + claimNumber 
                                    + `/declined-claims`, declinedClaim);
    }
}
