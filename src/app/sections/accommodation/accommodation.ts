import { Component, inject, OnInit } from '@angular/core';
import { AdminAccommodationService } from '../../core/services/admin-accommodation';
import { AccommodationModel } from '../../models/accommodation.model';

@Component({
  selector: 'app-accommodation',
  imports: [],
  templateUrl: './accommodation.html',
  styleUrl: './accommodation.scss',
})
export class Accommodation {
  private service = inject(AdminAccommodationService);
  accommodations: AccommodationModel[] = [];

  ngOnInit() {
    this.load();
  }

  load(){
    this.service.getAll().subscribe(data => this.accommodations = data);
  }
}
