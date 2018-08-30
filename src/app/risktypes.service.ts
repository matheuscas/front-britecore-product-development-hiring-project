import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RisktypesService {

  public readonly endpoint = 'http://127.0.0.1:8000/api/v1/risktypes';

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }

  get(id: number) {
    return this.http.get(`${this.endpoint}/${id}`);
  }
}
