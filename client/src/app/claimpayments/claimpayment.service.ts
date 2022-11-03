import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Claim } from '../claims/claim';
import { ClaimPayment } from './claimpayment';

@Injectable({
    providedIn: 'root'
})
export class ClaimPaymentService {
    private baseURL = "http://localhost:8081/api/payments";

    constructor(private httpClient: HttpClient) { }

    getPaymentList(): Observable<ClaimPayment[]> {
        return this.httpClient.get<ClaimPayment[]>(`${this.baseURL}`);
    }

    createPayment(payment: ClaimPayment, claimNumber: string): Observable<ClaimPayment> {
        return this.httpClient.post<ClaimPayment>(`http://localhost:8081/api/claims/` + claimNumber 
                                                    + `/payments`, payment);
    }

    getClaim(paymentNumber: number): Observable<Claim> {
        return this.httpClient.get<Claim>(`${this.baseURL}/` + paymentNumber + '/claim');
    }
}
