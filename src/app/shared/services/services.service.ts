import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from '../models/service.model';

@Injectable({
	providedIn: 'root'
})

export class ServicesService {

	constructor(private http: HttpClient) {}

	getServices(): Observable<Service[]> {
    return this.http.get<Service[]>("http://localhost:3000/services");
  }

  getServicesById(id: string): Observable<Service[]> {
  	return this.http.get<Service[]>(`http://localhost:3000/services?q=${id}`);
  }

  getServiceById(category: string, path: string): Observable<Service> {
  	return this.http.get<Service>(`http://localhost:3000/services?q=${path}`);
  }

}