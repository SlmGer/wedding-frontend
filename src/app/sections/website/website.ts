import { Component } from '@angular/core';
import {About} from "../about/about";
import {Accommodation} from "../accommodation/accommodation";
import {Dresscode} from "../dresscode/dresscode";
import {Footer} from "../footer/footer";
import {Gifts} from "../gifts/gifts";
import {Header} from "../header/header";
import {Hero} from "../hero/hero";
import {Info} from "../info/info";
import {Rsvp} from "../rsvp/rsvp";
import {Logistics} from "../logistics/logistics";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-website',
  imports: [
    About,
    Accommodation,
    Dresscode,
    Footer,
    Gifts,
    Header,
    Hero,
    Info,
    Rsvp,
    Logistics
  ],
  templateUrl: './website.html',
  styleUrl: './website.scss',
})
export class Website {

}
