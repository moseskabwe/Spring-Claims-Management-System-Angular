import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseURL = "http://localhost:8081/api/users";

    constructor(private httpClient: HttpClient) { }

    getUser(userId: number): Observable<User> {
        return this.httpClient.get<User>(`${this.baseURL}/${userId}`);
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.baseURL}`);
    }
}