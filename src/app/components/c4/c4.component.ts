import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.scss']
})
export class C4Component implements OnInit {
  @Input() text:any
  constructor() { }

  ngOnInit(): void {
  }

}
