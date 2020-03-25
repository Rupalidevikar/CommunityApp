import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-community',
  templateUrl: './about-community.page.html',
  styleUrls: ['./about-community.page.scss'],
})
export class AboutCommunityPage implements OnInit {
  router: any;

  constructor() { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  back() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
