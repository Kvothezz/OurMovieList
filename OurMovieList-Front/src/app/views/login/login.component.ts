import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.setAttribute('data-bs-theme','dark');

  }

}
