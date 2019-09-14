import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSignIn() {
    if(this.username == "admin" && this.password == "test") {
      console.log("Success")
    } else {
      console.log("Wrong credentials")
    }
  }

}
