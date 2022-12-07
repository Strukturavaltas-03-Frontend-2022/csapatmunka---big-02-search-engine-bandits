import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { [x: string]: any }> {
  http: HttpClient = inject(HttpClient);
  apiUrl: string = environment.apiUrl;
  entityName: string = '';

  constructor() {}

  getAll(page: string = ''): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}${page}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entityName}`, item);
  }

  update(item: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entityName}/${item['id']}`,
      item
    );
  }

  remove(item: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entityName}/${item['id']}`);
  }
}
