import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution3',
  templateUrl: './solution3.component.html',
  styleUrls: ['./solution3.component.scss']
})
export class Solution3Component implements OnInit {
input:any=[]
number:any=null
result:any=[]
// str:String=''
  constructor() { }

  ngOnInit(): void {
  }
  remove(i:any) {
    this.input.splice(i, 1)
  }
  add() {
    let obj = {

    phoneNumber:""

    }
    this.input.push(obj)
  }
  submit(){
    // console.log(this.input.length)
    // console.log(this.number)
    let obj={
      phoneNumber:this.number
    }
    this.result.push(obj)
    for(let i=0;i<this.input.length;i++)
    {
      let obj={
        phoneNumber:this.input[i].phoneNumber
      }
      this.result.push(obj)
    }
    console.log(this.result)
  }
}
