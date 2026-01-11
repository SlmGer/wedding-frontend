import { Component, inject, OnInit } from '@angular/core';
import {Accommodation} from "../accommodation/accommodation";
import {Footer} from "../footer/footer";
import {Hero} from "../hero/hero";
import {Rsvp} from "../rsvp/rsvp";
import {RouterLink, RouterOutlet} from '@angular/router';
import {RsvpAdmin} from './rsvp-admin/rsvp-admin';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [
    //Footer,
    //Hero,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {

    private auth = inject(AuthService);
    private router = inject(Router);

    isLoggedIn = false;

    ngOnInit() {
      this.isLoggedIn = this.auth.isLoggedIn();
    }

    logout() {
      this.auth.logout();
      this.router.navigate(['/login']);
    }

}
