import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution4',
  templateUrl: './solution4.component.html',
  styleUrls: ['./solution4.component.scss']
})
export class Solution4Component implements OnInit {
value:any
  constructor() { }

  ngOnInit(): void {
  }

  onChange(c:string) {
    this.value=c
    console.log(c)
  }
}
