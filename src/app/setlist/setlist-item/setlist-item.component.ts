import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-setlist-item',
  templateUrl: './setlist-item.component.html',
  styleUrls: ['./setlist-item.component.css']
})
export class SetlistItemComponent implements OnInit {

  @Input('song') song: Song;

  constructor() { }

  ngOnInit() {
  }

}
