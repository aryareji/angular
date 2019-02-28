import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userName:string = 'helllo' 
arr = ["red","green","blue"]

constructor() { }

  ngOnInit() {
    this.userName = 'arya'
  }

}
