import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-board',
  imports: [],
  templateUrl: './admin-board.html',
  styleUrl: './admin-board.scss'
})
export class AdminBoard implements OnInit {
  currentUser: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();

    // Double-check authentication
    if (!this.authService.isLoggedIn() || this.currentUser?.role !== 'admin') {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}
