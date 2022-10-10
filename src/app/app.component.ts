import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  constructor(private router:Router){

  }
  gotoSol1(){
    this.router.navigateByUrl('solution1')
  }
  gotoSol3(){
    this.router.navigateByUrl('solution3')
  }
  gotoSol4(){
    this.router.navigateByUrl('solution4')
  }
}
