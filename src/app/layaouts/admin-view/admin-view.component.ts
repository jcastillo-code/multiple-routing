import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  public sideBarOpen: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  SideBarToogler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
