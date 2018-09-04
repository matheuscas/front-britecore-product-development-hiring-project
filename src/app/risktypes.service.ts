import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RisktypesService {

  public readonly endpoint = `${environment.host}/api/v1/risktypes`;

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }

  get(id: number) {
    return this.http.get(`${this.endpoint}/${id}`);
  }
}
