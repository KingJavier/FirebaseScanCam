import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.page.html',
  styleUrls: ['./logged.page.scss'],
})
export class LoggedPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authSvc.logout();
  }

}
