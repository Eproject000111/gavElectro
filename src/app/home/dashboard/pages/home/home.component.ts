import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prodViewIndex:any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  viewMoreOrLess(val:any)
  {
    this.prodViewIndex = val;

  }

}
