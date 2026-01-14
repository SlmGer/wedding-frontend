import { Component } from '@angular/core';
import { RsvpService } from '../../core/services/rsvp';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RsvpModel } from '../../models/rsvp.model';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss',
})
export class Rsvp {

  loading = false;
  success = false;
  error = false;

  successMessage = "";

  model: RsvpModel = {
    guestName: '',

    present: true,
    enfants: 0,

    vegetarien: false,
    halal: false,
    casher: false,
    sansAllergene: false,

    mairie: true,
    eglise: true,
    vinDHonneur: true,
    reception: true,

    vehicule: false,
    covoiturage: false,

    remarque: ''
  }

  constructor(public auth: AuthService, private rsvpService: RsvpService) {}

  onSubmit(){
    this.loading = true;
    this.error = false;

    if (!this.model.present) {
      this.model.enfants = 0;
      this.model.mairie = false;
      this.model.eglise = false;
      this.model.vinDHonneur = false;
      this.model.reception = false;
      this.model.vehicule = false;
      this.model.covoiturage = false;
    }

    if (!this.auth.isFamily()) {
      this.model.mairie = false;
    }

    this.rsvpService.submitRsvp(this.model).subscribe({
      next: res => {
        this.successMessage = res.message;
        this.success = res.updated;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  get isComing(): boolean {
    return this.model.present === true;
  }

}
