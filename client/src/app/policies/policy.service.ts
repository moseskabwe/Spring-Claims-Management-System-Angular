import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Policy } from './policy';


@Injectable({
    providedIn: 'root'
})
export class PolicyService {
    private baseURL = "http://localhost:8081/api/policies";

    constructor(private httpClient: HttpClient) { }

    getPolicy(policyNumber: string): Observable<Policy> {
        return this.httpClient.get<Policy>(`${this.baseURL}/` + policyNumber);
    } 

}