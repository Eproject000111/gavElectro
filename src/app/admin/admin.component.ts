import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/admin/dash');
  }

  logout()
  {
    let key = document.cookie.split('=')[0];
    document.cookie = key+'=';
  }

}
