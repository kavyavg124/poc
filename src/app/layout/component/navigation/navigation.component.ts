import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  logout() {
    this.sharedService.logout();
    this.router.navigate(['/auth/login']);
  }

}
