import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'movielist-item',
  templateUrl: './movielist-item.component.html',
  styleUrls: ['./movielist-item.component.css'],
})
export class MovielistItemComponent implements OnInit {
  movieList =['abc', 'de', "fghij"]
  

  constructor() { }

  ngOnInit(): void {
  
  }

  // salvaValor(){
  // //   let filmePesquisado = this.pesquisa.value;

  // //   if(filmePesquisado){
  // //     this.movieList.push(filmePesquisado);
  // //   }
  // // }
}
