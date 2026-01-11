import { Component, OnInit, inject } from '@angular/core';
import { AdminRsvpService } from '../../../core/services/admin-rsvp';
import { RsvpModel } from '../../../models/rsvp.model';

@Component({
  selector: 'app-rsvp-admin',
  imports: [],
  templateUrl: './rsvp-admin.html',
  styleUrl: './rsvp-admin.scss',
})
export class RsvpAdmin implements OnInit {
  private service = inject(AdminRsvpService);

  rsvps: RsvpModel[] = [];

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => {
      this.rsvps = data;
    });
  }

  remove(id: number) {
    if (!confirm('Supprimer cette réponse ?')) return;

    this.service.delete(id).subscribe(() => {
      this.load();
    });
  }

  get comingCount() {
    return this.rsvps.filter(r => r.present).length;
  }
}
