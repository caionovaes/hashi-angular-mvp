import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../shared/song.model';

@Component({
  selector: 'app-setlist-item',
  templateUrl: './setlist-item.component.html',
  styleUrls: ['./setlist-item.component.css']
})
export class SetlistItemComponent implements OnInit {

  @Input() song: Song;
  @Input() performer: boolean;

  constructor() { }

  ngOnInit() {
  }

}
