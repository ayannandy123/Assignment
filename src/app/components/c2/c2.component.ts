import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {
  @Input() text:any
  constructor() { }

  ngOnInit(): void {
  }

}
