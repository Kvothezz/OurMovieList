import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movielist',
  templateUrl: './movielist-view.component.html',
  styleUrls: ['./movielist-view.component.css']
})
export class MovielistViewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    document.body.setAttribute('data-bs-theme','dark');
  }

}
