import { Component, inject, OnInit } from '@angular/core';
import { AdminRsvpService } from '../../../core/services/admin-rsvp';
import { RsvpStats } from '../../../models/rsvp-stats.model';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  private service = inject(AdminRsvpService);

  stats?: RsvpStats;
  loading = false;
  error : string | null = null;

  ngOnInit() {
    this.load();
  }

  load() {
      this.loading = true;
      this.error = null;

      this.service.getStats().subscribe({
        next: s => {
          this.stats = s;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.error = 'Impossible de charger les statistiques';
        }
      });
    }
}
