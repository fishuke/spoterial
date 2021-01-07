import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor() {
  }

  songArray = [{
    iconURL: 'https://i.scdn.co/image/ab67616d0000b273d3004c7f9c57d391bbdb0850',
    title: 'Bangarang',
    author: 'skrillex'
  }, {
    iconURL: 'https://pbs.twimg.com/profile_images/962453106326827008/nYbSbw9N.jpg',
    title: 'Blood // Water',
    author: 'grandson'
  }, {
    iconURL: 'https://i.scdn.co/image/ab67616d0000b273d3004c7f9c57d391bbdb0850',
    title: 'First of the Year',
    author: 'skrillex'
  },
  {
    iconURL: 'https://pbs.twimg.com/profile_images/962453106326827008/nYbSbw9N.jpg',
    title: 'Rock Bottom',
    author: 'grandson'
  },
  {
    iconURL: 'https://i.scdn.co/image/ab67616d0000b273d3004c7f9c57d391bbdb0850',
    title: 'Kyoto',
    author: 'skrillex'
  }, {
    iconURL: 'https://pbs.twimg.com/profile_images/962453106326827008/nYbSbw9N.jpg',
    title: 'Overdose',
    author: 'grandson'
  }
  ];

  ngOnInit(): void {

  }

}
