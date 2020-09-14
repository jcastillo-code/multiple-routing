import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() ToggleSideBarStatus: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  ToggleSideBar(){
    this.ToggleSideBarStatus.emit();
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
