import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RsvpStats } from '../../models/rsvp-stats.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminRsvpService {
  private http = inject(HttpClient);
  //private apiUrl = 'http://localhost:8080/api/admin/rsvp';
  private apiUrl = environment.apiUrl+'/api/admin/rsvp';

  getAll(){
    return this.http.get<any[]>(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getStats(){
    return this.http.get<RsvpStats>(`${this.apiUrl}/stats`);
  }
}
