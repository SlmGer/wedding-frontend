import { Routes } from '@angular/router';
import { Website } from './sections/website/website';
import { Admin } from './sections/admin/admin';
import { RsvpAdmin } from './sections/admin/rsvp-admin/rsvp-admin';
import { AdminDashboard } from './sections/admin/admin-dashboard/admin-dashboard';
import { AccommodationAdmin } from './sections/admin/accommodation-admin/accommodation-admin';
import { Login } from './sections/auth/login/login';
import { guestGuard } from './guards/guest-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [guestGuard],
    component: Website
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    component: Admin,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboard
      },
      {
        path: 'rsvp',
        component: RsvpAdmin
      },
      {
        path: 'accommodations',
        component: AccommodationAdmin
      }
    ]
  }
];
