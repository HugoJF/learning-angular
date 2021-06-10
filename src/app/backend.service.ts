import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface MemeResponse {
  success: boolean;
  data: {
    memes: Meme[];
  }
}

export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  memes() {
    return this.http.get<MemeResponse>('https://api.imgflip.com/get_memes')
  }
}
