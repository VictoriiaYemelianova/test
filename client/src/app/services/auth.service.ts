import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { apiUrl } from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(private http: HttpClient) {}

  signIn(user: IUser) {
    return this.http.post(`${apiUrl}/sign-in`, user);
  }
}