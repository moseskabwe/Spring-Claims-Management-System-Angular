import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
}
