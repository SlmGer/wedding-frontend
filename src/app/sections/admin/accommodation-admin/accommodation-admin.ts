import { Component, inject, OnInit } from '@angular/core';
import { AdminAccommodationService } from '../../../core/services/admin-accommodation';
import { AccommodationModel } from '../../../models/accommodation.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accommodation-admin',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './accommodation-admin.html',
  styleUrl: './accommodation-admin.scss',
})
export class AccommodationAdmin implements OnInit {
 private service = inject(AdminAccommodationService);

 accommodations: AccommodationModel[] = [];
 isEditMode = false;
 isFormVisible = false;

 message: string | null = null;
 messageType: 'success' | 'error' = 'success';


  model: AccommodationModel = {
    name: '',
    type: '',
    address: '',
    distance: '',
    googleMapsUrl: '',
    bookingUrl: '',
    imageUrl: '',
    active: true
  };

  ngOnInit() {
    this.load();
  }

  load(){
    this.service.getAll().subscribe(data => this.accommodations = data);
  }

  remove(id?: number){
    if(!id) return;
    if(!confirm('Supprimer cet hébergement ?')) return;
    this.service.delete(id).subscribe({
      next: () => {
        this.load();
        this.showSuccess('Hébergement supprimé');
      },
      error: () => this.showError('Suppression impossible')
    });
  }

  reset() {
    this.model = {
      name: '',
      type: '',
      address: '',
      distance: '',
      googleMapsUrl: '',
      bookingUrl: '',
      imageUrl: '',
      active: true
    };
  }

  openCreate() {
    this.reset();
    this.isEditMode = false;
    this.isFormVisible = true;
  }

  openEdit(acc: AccommodationModel) {
    this.model = { ...acc };
    this.isEditMode = true;
    this.isFormVisible = true;
  }

  cancel() {
    this.isFormVisible = false;
    this.reset();
  }

  submit() {
    const action = this.isEditMode
      ? this.service.update(this.model)
      : this.service.create(this.model);

     action.subscribe({
        next: () => {
          this.load();
          this.isFormVisible = false;
          this.reset();
          this.showSuccess(
            this.isEditMode
              ? 'Hébergement mis à jour'
              : 'Hébergement ajouté'
          );
        },
        error: () => this.showError('Une erreur est survenue')
      });
  }

  showSuccess(msg: string) {
    this.message = msg;
    this.messageType = 'success';
    setTimeout(() => this.message = null, 3000);
  }

  showError(msg: string) {
    this.message = msg;
    this.messageType = 'error';
    setTimeout(() => this.message = null, 4000);
  }

}
