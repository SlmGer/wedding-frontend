import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Info } from './sections/info/info';
import { Dresscode } from './sections/dresscode/dresscode';
import { Gifts } from './sections/gifts/gifts';
import { Rsvp } from './sections/rsvp/rsvp';
import { Footer } from './sections/footer/footer';
import { About } from './sections/about/about';
import { Accommodation } from './sections/accommodation/accommodation';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RsvpAdmin } from './sections/admin/rsvp-admin/rsvp-admin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    //BrowserModule,
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('wedding-frontend');
}
