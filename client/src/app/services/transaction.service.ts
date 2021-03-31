import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiUrl } from "../constants";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  transaction() {
    return this.http.get(`${apiUrl}/transaction`);
  }

  cancelTransaction(item) {
    return this.http.post(`${apiUrl}/remove`, item);
  }
}