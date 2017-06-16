import { Song } from './song.model';

export class Show {

  constructor(public live: boolean, public songs: Song[]) {
  }

}
