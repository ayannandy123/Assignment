import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.scss']
})
export class Solution1Component implements OnInit {
  num: any
  result: string = ''
  constructor() { }

  ngOnInit(): void {

  }
  onClick() {
    let res: number
    this.num += 1
    if (this.num % 2 != 0)
      res = (this.num * this.num) + 1
    else
      res = (this.num * this.num) - 1
    this.result = res.toString()
    this.num=null
    console.log(res)
  }

}
