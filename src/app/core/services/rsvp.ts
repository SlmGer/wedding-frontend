import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RsvpModel } from '../../models/rsvp.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {

  //private apiUrl = 'http://localhost:8080/api/admin/rsvp';
  private apiUrl = environment.apiUrl+'/api/admin/rsvp';
  private http = inject(HttpClient);

  submitRsvp(data: RsvpModel){
    return this.http.post<{
      message: string,
      updated: boolean
    }>(this.apiUrl, data);
  }

  getAll() {
    return this.http.get<RsvpModel[]>(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
