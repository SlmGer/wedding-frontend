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
  loading = false;
  error:  string | null = null;

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
      this.error = null;

      this.service.getAll().subscribe({
        next: data => {
          this.rsvps = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.error = 'Impossible de charger les réponses RSVP';
        }
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
