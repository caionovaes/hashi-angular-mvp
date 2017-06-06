import { Component, OnInit } from '@angular/core';
import {Song} from '../../models/song.model';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.css']
})
export class SetlistComponent implements OnInit {

  songs: Song[] = [
    new Song('Luz do Sol', 'Caetano Veloso', 0, false),
    new Song('Thriller', 'Michael Jackson', 0, false),
    new Song('Graduation', 'Kero Kero Bonito', 0, false),
    new Song('Passionfruit', 'Drake', 0, false),
    new Song('My Immortal', 'Evanescence', 0, false),
    new Song('Around the World', 'RHCP', 0, false),
    new Song('Joao de Barro', 'Maria Gadu', 0, false)
  ];

  constructor() { }

  ngOnInit() {
  }

}
