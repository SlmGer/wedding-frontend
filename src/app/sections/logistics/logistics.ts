import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-logistics',
  imports: [],
  templateUrl: './logistics.html',
  styleUrl: './logistics.scss',
})
export class Logistics {
  constructor(public auth: AuthService) {}
}
