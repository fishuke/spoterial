import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() isSidenavToggled = new EventEmitter<any>();

  constructor() {
  }

  toggle(): void {
    this.isSidenavToggled.emit();
  }

  ngOnInit(): void {
  }

}
