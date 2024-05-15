import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  address: Address
  id: number
  email: string
  username: string
  password: string
  name: Name
  phone: string
}

export interface Address {
  geolocation: Geolocation
  city: string
  street: string
  number: number
  zipcode: string
}

export interface Geolocation {
  lat: string
  long: string
}

export interface Name {
  firstname: string
  lastname: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>("https://fakestoreapi.com/users");
  }
}
