import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventType, PaginatedResourceResponse} from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  get<T>(url: string) {
    return this.http.get<PaginatedResourceResponse<EventType[]>>(url, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer pog',
      }
    })
  }

  events(page: number = 1) {
    return this.get<PaginatedResourceResponse<EventType[]>>('http://tokenlab.test/api/events?page=' + page)
  }
}
