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

  ngOnInit() {
    this.service.getStats().subscribe(s => this.stats = s);
  }
}
