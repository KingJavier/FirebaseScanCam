import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aprendiz',
  templateUrl: './aprendiz.page.html',
  styleUrls: ['./aprendiz.page.scss'],
})
export class AprendizPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authSvc.logout();
  }

}
