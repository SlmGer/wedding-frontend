import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccommodationModel } from '../../models/accommodation.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminAccommodationService {
  private http = inject(HttpClient);
  //private apiUrl = 'http://localhost:8080/api/admin/accommodations';
  private apiUrl = environment.apiUrl+'/api/admin/accommodations';

  getAll(){
    return this.http.get<AccommodationModel[]>(this.apiUrl);
  }

  create(acc: AccommodationModel){
    return this.http.post(this.apiUrl, acc);
  }

  update(acc: AccommodationModel) {
    return this.http.put<AccommodationModel>(
      `${this.apiUrl}/${acc.id}`,
      acc
    );
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
