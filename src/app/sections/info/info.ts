import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  targetDate = new Date('2026-03-21T11:00:00');

  days = 0;
  hours = 0;
  minutes = 0;

  constructor(public auth: AuthService) {}

  ngOnInit(){
    setInterval(() => this.updateCountdown(), 60000);
    this.updateCountdown();
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance / (1000 * 60 * 60)) %24);
    this.minutes = Math.floor((distance / (1000 * 60)) % 60);
  }
}
