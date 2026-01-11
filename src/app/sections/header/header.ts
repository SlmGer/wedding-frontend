import { Component, inject, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

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

  @HostListener('window:scroll')
  onScroll() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }
}
