import { Song } from './song.model';
import { Attendee } from './attendee.model';

export class Show {

  constructor(public live: boolean, public songs: Song[], public attendees: Attendee[], public dynamic: boolean) {
  }

}
